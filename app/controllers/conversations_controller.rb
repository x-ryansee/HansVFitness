class ConversationsController < ApplicationController
  before_action :authenticate_user!

  # GET /conversations
  def index
    conversations = current_user.conversations
    render json: conversations, include: :users
  end

  # POST /conversations
  def create
    conversation = Conversation.create(conversation_params)
    if conversation.valid?
      if current_user.trainer?
        # If the current user is a trainer, add the specified users to the conversation
        conversation.users << User.where(id: params[:conversation][:user_ids]).where.not(trainer: true)
      else
        # If the current user is not a trainer, add the current user to the conversation
        conversation.users << current_user
      end
      serialized_data = ActiveModelSerializers::Adapter::Json.new(
        ConversationSerializer.new(conversation)
      ).serializable_hash
      ActionCable.server.broadcast 'conversations_channel', serialized_data
      head :ok
    end
  end

   # POST /conversations/with_trainer
  def create_with_trainer
    trainer = User.find_by(trainer: true)
    conversation = Conversation.create(users: [current_user, trainer])
    if conversation.valid?
      serialized_data = ActiveModelSerializers::Adapter::Json.new(
        ConversationSerializer.new(conversation)
      ).serializable_hash
      ActionCable.server.broadcast 'conversations_channel', serialized_data
      head :ok
    end
  end

  # GET /conversations/1
  def show
    conversation = Conversation.find(params[:id])
    render json: conversation, include: [:users, messages: {include: :user}]
  end

  private
    def conversation_params
      params.require(:conversation).permit(user_ids: [])
    end
end
