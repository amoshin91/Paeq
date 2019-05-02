class LikeController < ApplicationController
  before_action :get_likes, only: [:show, :edit, :update]

  def index
    @like = Like.all
  end

  def show
  end

  def new
    @like = Like.new
  end

  def create
    @like = Like.create(like_params)
  end

  def edit
  end

  def update
    @like.update(like_params)
    redirect_to @like
  end

  private

  def like_params
    params.require(:like).permit(:count)
  end

  def get_likes
    @like = Like.find(params[:id])
  end

end
