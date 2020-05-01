# frozen_string_literal: true

module Hotel
  class ReviewsController < ApplicationController
    def index
      render_success_result(reviews: Review.all)
    end
  end
end
