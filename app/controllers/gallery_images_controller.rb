class GalleryImagesController < ApplicationController
  def index
    @collection = gallery.images

    render json: @collection
  end

  def show
  end

  def create
    @image = Image.find(params[:image_id])

    if gallery.images << @image
      render json: gallery.images
    else 
      render json: gallery.errors
    end
  end

  def update
  end

  def destroy
    @image = Image.find(params[:image_id])

    gallery.images.delete(@image)
  end
end
