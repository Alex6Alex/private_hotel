# frozen_string_literal: true

module Hotel
  class ReviewsController < ApplicationController
    def index
      render_success_result(reviews: Review.where(approved: true))
    end

    def create
      review = Review.create(guest_name: params[:guest_name], email: params[:email], content: params[:content])
      render_success_result({}, :created)
    end
  end
end
