# frozen_string_literal: true

module Hotel
  class BookOrdersController < ApplicationController
    def create
      puts('CREATED!!!')
      # review = Review.create(guest_name: params[:guest_name], content: params[:content])
      # render_success_result({ review: review }, :created)
    end
  end
end
