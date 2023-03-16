class WorkoutsController < ApplicationController
    before_action :set_workout, only: [:show, :update, :destroy]
  
    # GET /workouts
    def index
      @workouts = current_user.workouts
      @workouts = @workouts.where(date: params[:start_date]..params[:end_date]) if params[:start_date].present? && params[:end_date].present?
      render json: @workouts, include: :exercises
    end
  
    # GET /workouts/1
    def show
      render json: @workout, include: :exercises
    end
  
    # POST /workouts
    def create
      @workout = current_user.workouts.build(workout_params)
  
      if @workout.save
        render json: @workout, status: :created, location: @workout
      else
        render json: @workout.errors, status: :unprocessable_entity
      end
    end
  
    # PATCH/PUT /workouts/1
    def update
      if @workout.update(workout_params)
        render json: @workout
      else
        render json: @workout.errors, status: :unprocessable_entity
      end
    end
  
    # DELETE /workouts/1
    def destroy
      @workout.destroy
    end
  
    private
      # Use callbacks to share common setup or constraints between actions.
      def set_workout
        @workout = current_user.workouts.find(params[:id])
      end
  
      # Only allow a trusted parameter "white list" through.
      def workout_params
        params.require(:workout).permit(:date, :notes, exercises_attributes: [:id, :name, :muscle_group, :_destroy, sets_attributes: [:id, :weight, :reps, :_destroy]])
      end
  end
  