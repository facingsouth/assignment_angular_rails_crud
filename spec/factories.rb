FactoryGirl.define do
  
  factory :user do
    sequence(:username) { |i| "user#{i}" }
  end

  factory :pin do
    sequence(:item_name) { |i| "item#{i}" }
    buy_sell [true, false].sample
    description "Lorem ipsum dolor sit amet."
    user
  end

end