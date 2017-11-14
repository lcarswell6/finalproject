class Api::UsersController < ApplicationController
    def index
        @users = User.all
        render json: @users
    end

    def create
        @user = User.create!(user_params)
        render json: @user
    end
    
    def show
        @user = User.find(params[:id])
        @posts = @user.posts
        render json: {
            user: @user,
            posts: @posts
    }
    end

    def update
        @user = User.find(params[:id])
        @user.update!(user_params)
        render json: @user
    end

    def destroy
        @user = User.find(params[:id]).delete
        render status: :ok
    end

    private

    def user_params
        params.require(:user).permit(:name, :image_url, :user_rating)
    end
end
