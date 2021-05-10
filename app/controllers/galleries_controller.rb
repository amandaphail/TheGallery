class GalleriesController < ApplicationController
  def index
    @galleries = Gallery.all

    render json: @galleries
  end

  def show
    @gallery = Gallery.find(params[:id]) 

    # render json: @gallery, include: [:image]
    render json: @gallery
  end

  def create
    @gallery = Gallery.new(gallery_params)

    if @gallery.save
      render json: @gallery
    else
      render json: @gallery.errors 
    end
  end

  def update
    @gallery = Gallery.find(params[:id])

    if @gallery.update(gallery_params)
      render json: @gallery 
    else
      render json: @gallery.errors
    end
  end

  def destroy
    @gallery = Gallery.find(params[:id])
    
    @gallery.destroy
    render json: {message: "Gallery has been deleted"}
  end

  def gallery_params
    params.require(:gallery).permit(:number_of_frames, :wall_color)
  end
end
