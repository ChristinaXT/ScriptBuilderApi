# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.create(name: "Christina", username: "ChristinaXT", password: "password")
Location.create(city: "Houston", state: "Texas", country: "USA")
Epoch.create(timeperiod: "present day")
Title.create(name: "Modern Love")
Character.create(name: "Bill")
Character.create(name: "Dawn")
