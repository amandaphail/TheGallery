class Image < ApplicationRecord
  has_many :gallery_images
  has_many :galleries, through :gallery_images
end
