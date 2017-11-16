class Api::PostsController < ApplicationController
    def index
        @posts = Venue.find(params[:venue_id]).posts.all
        render json: @posts
    end

    def show
        @post = Post.find(params[:id])
        render json: @post
    end

    def create
        @venue = Venue.find(params[:venue_id])
        @post = Post.new(post_params)

        @venue.posts << @post
        @venue.save!

        render status: :ok
    end

    def update 
        @post = Post.find(params[:id])
        @post.update!(song_params)
        render json: @post
    end

    def destroy
        @post = Post.find(params[:id]).delete
        render status: :ok
    end

    private

    def post_params
        params.require(:post).permit(:title, :event, :content, :image_url, :post_rating)
    end

end
