Rails.application.routes.draw do

  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  resources :gallery_images

  resources :galleries do
    resources :images
  end


  get "/images", to: "images#all_images"

end
