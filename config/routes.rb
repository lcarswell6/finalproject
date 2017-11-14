Rails.application.routes.draw do
  namespace :api do 
    resources :users do 
    resources :posts
    end
    
    resources :venues do
    resources :posts
    end
  end
end
