class Story < ApplicationRecord
  belongs_to :user
  has_many :titles
  has_many :characters
  has_many :settings
  has_many :epoches
  has_many :inciting_incidents
  has_many :comments
  has_many :synopses
  has_many :characters
  has_many :character_histories



  # validates :name, :user, presence: true
end
