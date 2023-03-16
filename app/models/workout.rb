class Workout < ApplicationRecord
  belongs_to :user
  has_many :exercisesets
end