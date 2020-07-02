# frozen_string_literal: true

module Admin
  class ReviewsController < ApplicationController
    def index
      render_success_result(data: Review.all.order(created_at: :desc))
    end

    def approve
      review = Review.find_by(id: params[:id])
      raise(RecordNotFoundError.build) if review.nil?

      review.update(approved: true)
      render_success_result(data: review)
    end

    def destroy
      review = Review.find_by(id: params[:id])
      raise(RecordNotFoundError.build) if review.nil?

      review.delete
      render_success_result
    end
  end
end
