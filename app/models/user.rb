class User < ApplicationRecord
    has_many :messages
    has_many :workouts
    has_many :conversations, through: :messages

    has_secure_password
  end