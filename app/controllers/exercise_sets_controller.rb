class ExerciseSetsController < ApplicationController
    before_action :set_set, only: [:update, :destroy]
  
    # POST /sets
    def create
      @set = Set.new(set_params)
  
      if @set.save
        render json: @set, status: :created
      else
        render json: @set.errors, status: :unprocessable_entity
      end
    end
  
    # PATCH/PUT /sets/1
    def update
      if @set.update(set_params)
        render json: @set
      else
        render json: @set.errors, status: :unprocessable_entity
      end
    end
  
    # DELETE /sets/1
    def destroy
      @set.destroy
    end
  
    private
      # Use callbacks to share common setup or constraints between actions.
      def set_set
        @set = Set.find(params[:id])
      end
  
      # Only allow a trusted parameter "white list" through.
      def set_params
        params.require(:set).permit(:weight, :reps, :exercise_id, :workout_id)
      end
  end
  