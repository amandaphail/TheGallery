class GalleryImage < ApplicationRecord
  belongs_to :gallery, optional: true 
  belongs_to :image
end
