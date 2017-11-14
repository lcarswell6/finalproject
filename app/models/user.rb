class User < ApplicationRecord
has_many :posts, dependent: :destroy
has_many :venues, through: :posts
end
