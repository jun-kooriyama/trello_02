Rails.application.routes.draw do
  root to: 'home#index'

  # if Rails.env.development?
  #     mount GraphiQL::Rails::Engine, at: '/graphiql', graphql_path: '/graphql'
  # end
end
