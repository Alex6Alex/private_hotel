# frozen_string_literal: true

module Admin
  class ReviewsController < ApplicationController
    def index
      render_success_result(Review.all)
    end

    def approve
      review = Review.find_by(id: params[:id])
      raise('eerir') if review.nil?

      review.update(approved: true)
      render_success_result(review)
    end

    def destroy
      review = Review.find_by(id: params[:id])
      raise('incorrect id') if review.nil?

      review.delete
      render_success_result({})
    end
  end
end
