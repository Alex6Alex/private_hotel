# frozen_string_literal: true

module Hotel
  class ReviewsController < ApplicationController
    def index
      render_success_result(
        data: Review.where(approved: true).order(created_at: :desc)
      )
    end

    def create
      review = Review.create(
        guest_name: params[:guest_name],
        email:      params[:email],
        content:    params[:content]
      )
      check_validation_results!(review)

      render_success_result(status: :created)
    end
  end
end
