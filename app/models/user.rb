class User < ApplicationRecord
  has_secure_password

  has_many :stories
  has_many :comments
  accepts_nested_attributes_for :stories

  validates :name, :username, presence: true
  validates :username, uniqueness: true
end
