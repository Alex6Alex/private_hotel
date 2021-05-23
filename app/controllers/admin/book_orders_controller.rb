# frozen_string_literal: true

module Admin
  class BookOrdersController < ApplicationController
    include Recordable

    before_action :find_book_order, only: %i[approve destroy]

    def index
      render_success_result(
        data: BookOrder.preload(:hotel_room).all.order(created_at: :desc).as_json(
          include: { hotel_room: { only: :name } }
        )
      )
    end

    def approve
      @record.update(approved: true)
      render_success_result(data: @record)
    end

    private

    def find_book_order
      @record = BookOrder.find_by(id: params[:id])
      raise(RecordNotFoundError.build) if @record.nil?
    end
  end
end
