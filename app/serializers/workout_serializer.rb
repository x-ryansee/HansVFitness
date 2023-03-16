class WorkoutSerializer < ActiveModel::Serializer
  attributes :id, :date
  has_one :user
end
