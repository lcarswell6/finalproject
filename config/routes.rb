Rails.application.routes.draw do
  namespace :api do 
    resources :users 
    resources :venues do
      resources :posts
    end

  end
end
