class UserController < ApplicationController
  before_action :get_users, only: [:show, :edit, :update, :destroy]

  def index
    @user = User.all
  end

  def show
  end

  def new
    @user = User.new
  end

  def create
    @user = User.create(user_params)
  end

  def edit
  end

  def update
    @user.update(user_params)
    redirect_to @user
  end

  def destroy
    redirect_to users_path
  end

  private

  def user_params
    params.require(:user).permit(:name, :username, :password_digest, :avatar, :email)
  end

  def get_users
    @user = User.find(params[:id])
  end

end
