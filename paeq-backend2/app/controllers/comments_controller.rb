class CommentsController < ApplicationController
  before_action :get_comments, only: [:show, :edit, :update, :destroy]

  def index
    @comment = Comment.all
  end

  def show
  end

  def new
    @comment = Comment.new
  end

  def create
    @comment = Comment.create(comment_params)
  end

  def edit
  end

  def update
    @comment.update(comment_params)
    redirect_to @comment
  end

  def destroy
    redirect_to comment_params
  end

  private

  def comment_params
    params.require(:comment).permit(:content)
  end

  def get_comments
    @comment = Comment.find(params[:id])
  end

end
