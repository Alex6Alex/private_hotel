# frozen_string_literal: true

module Admin
  class ReviewsController < ApplicationController
    include Recordable

    before_action :find_review, only: %i[approve destroy]

    def approve
      @record.update(approved: true)
      render_success_result(data: @record)
    end

    private

    def all_records
      Review.all.order(created_at: :desc)
    end

    def find_review
      @record = Review.find_by(id: params[:id])
      raise(RecordNotFoundError.build) if @record.nil?
    end
  end
end
