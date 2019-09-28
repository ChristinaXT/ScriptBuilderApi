class Story < ApplicationRecord
  belongs_to :user
  has_many :titles
  has_many :characters
  has_many :locations
  has_many :epoches
  has_many :inciting_incidents
  has_many :comments


  validates :name, :user, presence: true
end
