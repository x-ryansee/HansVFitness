Rails.application.routes.draw do
  
  resources :exercise_sets
  resources :exercises
  resources :workouts
  get 'conversations/index'
  get 'conversations/create'
  get 'conversations/show'
  get 'sessions/new'
  get 'sessions/create'
  get 'sessions/destroy'
  resources :users
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
