class Image < ApplicationRecord
  has_many :gallery_images
    has_many :galleries, through: :gallery_images, dependent: :destroy
  
    accepts_nested_attributes_for :gallery_images
end
