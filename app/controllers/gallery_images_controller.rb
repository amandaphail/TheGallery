class GalleryImagesController < ApplicationController
  def index
    @collection = Gallery.images

    render json: @collection
  end

  def show
  end

  def create
    @image = Image.find(params[:image_id])

    if Gallery.images << @image
      render json: gallery.images
    else 
      render json: gallery.errors
    end
  end

  def update
  end

  def destroy
    @image = Image.find(params[:image_id])

    Gallery.images.delete(@image)
  end
end
