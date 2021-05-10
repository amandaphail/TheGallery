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

    render json: @image 
  end

  def create
    @gallery = Gallery.find(params[:gallery_id])
    @image = @gallery.images.build(image_params)

    if @image.save
      @gallery.images << @image
      render json: @image, status: :created
    else
      render json: @image.errors, status: :unprocessable_entity
    end
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
    params.require(:image).permit(:url, :position, :frame_color)
  end
end
