class UserSerializer
  include FastJsonapi::ObjectSerializer
  attributes :username, :name
  # has_many :stories, serializer: StorySerializer
end
