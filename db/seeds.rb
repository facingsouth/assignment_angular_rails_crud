# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)


User.destroy_all
Pin.destroy_all

10.times do |i|
  name = Faker::Name.name
  user = User.create(username: name)
  5.times do |j|
    item_name = Faker::Commerce.product_name
    buy_sell = j < 3 ? true : false
    description = Faker::Lorem.sentence
    user.pins.create(item_name: item_name, buy_sell: buy_sell, description: description)
  end
end