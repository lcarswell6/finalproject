class Venue < ApplicationRecord
has_many :posts, dependent: :destroy
end
