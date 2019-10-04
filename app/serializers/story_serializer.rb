class StorySerializer
  include FastJsonapi::ObjectSerializer
  attributes :synopsis, :titles, :settings, :epoches, :inciting_incidents, :characters, :character_histories, :notes
end

# belongs_to :user
# has_many :titles
# has_many :characters
# has_many :settings
# has_many :epoches
# has_many :inciting_incidents
# has_many :comments
