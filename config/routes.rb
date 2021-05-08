Rails.application.routes.draw do
  # get 'gallery_images/index'
  # get 'gallery_images/show'
  # get 'gallery_images/create'
  # get 'gallery_images/update'
  # get 'gallery_images/delete'
  # get 'images/index'
  # get 'images/show'
  # get 'images/create'
  # get 'images/update'
  # get 'images/delete'
  # get 'galleries/index'
  # get 'galleries/show'
  # get 'galleries/create'
  # get 'galleries/update'
  # get 'galleries/delete'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  resources :gallery_images

  resources :galleries do
    resources :images
  end

  get "/images", to: "images#all_images"

end
