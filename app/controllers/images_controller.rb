class ImagesController < ApplicationController
  
  # before_action :set_image, only: %i[show update destroy]

  def all_images
    @images = Image.all

    render json: @images, include [:gallery]
  end


  def index
    @images = Image.all

    render json: @images
  end

  def show
    @image = Image.find(params[:id])
  
    render json: @image 
  end

  def create
    @image = Image.new(image_params)

    if @image.save
      render json: @image
    else
      render json: @image.errors
    end
  end

  def update
    @image = Image.find(params[:id])

    if @image.update(image_params)
      render json: @image
    else
      render json: @image.errors 
    end
  end

  def destroy
    @image = Image.find(params[:id])

    @image.destroy
    render json: {message: "Image has been deleted"}
  end

  def image_params
    params.require(:image).permit(:url)
  end
end