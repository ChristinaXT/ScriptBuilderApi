class Character < ApplicationRecord
  belongs_to :story
  has_many :given_circumstances
end
