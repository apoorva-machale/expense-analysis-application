Rails.application.routes.draw do
  # get 'pages/index'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  root 'pages#index'
  match 'signup', to: 'pages#index', via: :all
  match 'budget', to: 'pages#index', via: :all
  match 'transaction', to: 'pages#index', via: :all
  namespace 'api' do
    namespace 'v1' do
      resources :users do
        collection do
          post 'login', to: 'users#login'
        end
      end
      resources :categories
      resources :budgets
      resources :transactions
    end
  end
end
