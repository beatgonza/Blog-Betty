Blog::Application.routes.draw do

  root :to => "posts#home_index"
  resources :users, :posts, :comments, :categories

end