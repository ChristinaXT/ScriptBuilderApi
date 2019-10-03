class CharacterSerializer
  include FastJsonapi::ObjectSerializer
  attributes :given_circumstances
end
