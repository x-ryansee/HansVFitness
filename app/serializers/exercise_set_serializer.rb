class ExerciseSetSerializer < ActiveModel::Serializer
  attributes :id, :weight, :reps
  has_one :exercise
  has_one :workout
end
