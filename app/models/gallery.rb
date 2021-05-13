class Gallery < ApplicationRecord
  has_many :gallery_images, ->{order("position ASC")}
  has_many :images, through: :gallery_images, dependent: :destroy

  def order_image
     Gallery.joins(gallery_images: :image)
  end
end
