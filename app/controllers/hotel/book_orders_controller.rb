# frozen_string_literal: true

module Hotel
  class BookOrdersController < ApplicationController
    def create
      Hotel::BookOrderValidator.new(params).inspect

      room = Room.find_by(id: params[:room_id])
      raise(Hotel::RoomNotFoundError.build) if room.nil?

      book_order = BookOrder.create(
        room_id: params[:room_id],
        date_in: params[:date_in],
        date_out: params[:date_out],
        guest_with_place: params[:guest_with_place],
        guest_without_place: params[:guest_without_place],
        email: params[:email],
        phone: params[:phone],
        time_in: params[:time_in]
      )
      # send_email

      render_success_result({ book_order: book_order }, :created)
    end
  end
end
