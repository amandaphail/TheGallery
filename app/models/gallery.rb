class Gallery < ApplicationRecord
  has_many :gallery_images
  has_many :images, through :gallery_images
end
