class ImagesController < ApplicationController
  
  # before_action :set_image, only: %i[show update destroy]

  def all_images
    @images = Image.all

    render json: @images
  end


  def index
    @images = Gallery.find(params[:gallery_id]).images 

    render json: @images
  end

  def show
    @image = Image.find(params[:id])

    render json: @image, include: :gallery_images
  end

  def create
    # render json: params
    @gallery = Gallery.find(params[:gallery_id])
    puts @gallery.inspect
    # loop of array of images that are submitted
    @image = Image.new(url: params[:url])
    if @image.save!
      @gallery_image = GalleryImage.new(image: @image, gallery_id: params[:gallery_id], position: params[:position], frame_color: params[:frame_color])

      if @gallery_image.save!
        render json: @gallery_image, status: :created
      else
        render json: @image.errors, status: :unprocessable_entity
      end
  
    end

    # if @image.save
    #   # @gallery.images << @image
    #   render json: @image, status: :created
    # else
    #   render json: @image.errors, status: :unprocessable_entity
    # end
  end

  def update
    @image = Image.find(params[:id])

    if @image.update(image_params)
      render json: @image
    else
      render json: @image.errors, status: :unprocessable_entity
    end
  end

  def destroy
    @image = Image.find(params[:id])

    if @image.destroy
      render json: {message: "Image has been deleted"}
    end
  end

  def image_params
    params.require(:image).permit(:url, gallery_images_attributes: [:position, :frame_color, :gallery_id])
  end
end
