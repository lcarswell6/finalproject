class Api::VenuesController < ApplicationController
    def index
        @venues = Venue.all
        render json: @venues
    end

    def create
        @venue = Venue.create!(venue_params)
        render json: @venue
    end

    def show
        @venue = Venue.find_by_id(params[:id])
        render json: @venue
    end

    def update
        @venue = Venue.find(params[:id])
        @venue.update!(venue_params)
        render json: @venue
    end

    def destroy 
        @venue = Venue.find(params[:id]).delete
        render status: :ok
    end

    private

    def venue_params
        params.require(:venue).permit(:name, :address, :dress_type, :rating, :description)
    end
end
