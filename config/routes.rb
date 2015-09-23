Rails.application.routes.draw do

  root 'angular#index'

  scope :api do
    scope :v1 do
      resources :pins
      devise_for :users, :controllers => {registrations: 'registrations'}
    end
  end

end
