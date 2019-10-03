class StorySerializer
  include FastJsonapi::ObjectSerializer
  attributes :synopses, :titles, :settings, :epoches, :inciting_incidents, :characters
end

# belongs_to :user
# has_many :titles
# has_many :characters
# has_many :settings
# has_many :epoches
# has_many :inciting_incidents
# has_many :comments
