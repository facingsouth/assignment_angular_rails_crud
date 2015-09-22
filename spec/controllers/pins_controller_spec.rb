require 'rails_helper'

RSpec.describe PinsController, type: :controller do

  let!(:pin) { FactoryGirl.create(:pin) }
  let!(:another_pin) { FactoryGirl.create(:pin) }
  let(:json) { JSON.parse(response.body) }

  describe 'GET /pins' do

    before do 
      get :index, format: :json
    end

    it 'should return all the pins' do
      expect(json.length).to eq(2)
    end

    specify 'The first pin should be the proper pin.' do
      expect(json[0]['id']).to eq(pin['id'])
      expect(json[0]['item_name']).to eq(pin['item_name'])
      expect(json[0]['buy_sell']).to eq(pin['buy_sell'])
      expect(json[0]['description']).to eq(pin['description'])
      expect(json[0]['user_id']).to eq(pin['user_id'])
    end

  end

  describe 'GET /pins/:id' do

    before do 
      get :show, id: pin['id'], format: :json
    end

    it 'should return the proper pin.' do
      expect(json['id']).to eq(pin['id'])
      expect(json['item_name']).to eq(pin['item_name'])
      expect(json['buy_sell']).to eq(pin['buy_sell'])
      expect(json['description']).to eq(pin['description'])
      expect(json['user_id']).to eq(pin['user_id'])
    end

  end

  describe 'POST /pins' do

    before do
      new_pin = { item_name: 'new_item', buy_sell: "true", description: "new_des", user_id: 1 }
      post :create, pin: new_pin , format: :json
    end

    it 'should be able to create a new pin.' do
      expect(json['item_name']).to eq('new_item')
      expect(json['buy_sell']).to eq(true)
      expect(json['description']).to eq("new_des")
      expect(json['user_id']).to eq(1)
    end

  end

  describe 'PUT /pins/:id' do

    before do
      new_pin = { item_name: 'new_item', buy_sell: "true", description: "new_des", user_id: 1 }
      patch :update, id: pin['id'], pin: new_pin , format: :json
    end

    it 'should be able to update a pin.' do
      expect(json['item_name']).to eq('new_item')
      expect(json['buy_sell']).to eq(true)
      expect(json['description']).to eq("new_des")
      expect(json['user_id']).to eq(1)
    end

  end

end








