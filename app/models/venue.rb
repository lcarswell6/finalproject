class Venue < ApplicationRecord
has_many :posts, dependent: :destroy
has_many :user, through: :posts
end
