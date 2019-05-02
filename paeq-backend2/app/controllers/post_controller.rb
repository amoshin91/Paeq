class PostController < ApplicationController
  before_action :get_posts, only: [:show]

  def show
  end

  private

  def get_posts
    @post = Post.find(params[:id])
  end

end
