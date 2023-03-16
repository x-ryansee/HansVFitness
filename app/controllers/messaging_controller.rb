class MessagingController < ApplicationController
    before_action :authenticate_user!
  
    # POST /messaging
    def create
      conversation = Conversation.find(params[:conversation_id])
      message = conversation.messages.build(message_params)
      message.user = current_user
      if message.save
        serialized_data = ActiveModelSerializers::Adapter::Json.new(
          MessageSerializer.new(message)
        ).serializable_hash
        MessagingChannel.broadcast_to conversation, serialized_data
        head :ok
      end
    end
  
    private
      def message_params
        params.require(:message).permit(:content)
      end
  end
  