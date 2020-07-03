# frozen_string_literal: true

module Admin
  class BookOrdersController < ApplicationController
    def index
      render_success_result(
        data: BookOrder.preload(:hotel_room).all.order(created_at: :desc).as_json(
          include: { hotel_room: { only: :name } }
        )
      )
    end

    def approve
      book_order = BookOrder.find_by(id: params[:id])
      raise(RecordNotFoundError.build) if book_order.nil?

      book_order.update(approved: true)
      render_success_result(data: book_order)
    end

    def destroy
      book_order = BookOrder.find_by(id: params[:id])
      raise(RecordNotFoundError.build) if book_order.nil?

      book_order.delete
      render_success_result
    end
  end
end
