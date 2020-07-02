# frozen_string_literal: true

module Hotel
  class BookOrdersController < ApplicationController
    def create
      room = HotelRoom.find_by(id: params[:hotel_room_id])
      raise(RecordNotFoundError.build) if room.nil?

      book_order = BookOrder.create(
        hotel_room_id:        params[:hotel_room_id],
        arrival_date:         params[:date_in],
        departure_date:       params[:date_out],
        guests_with_place:    params[:guests_with_place],
        guests_without_place: params[:guests_without_place],
        email:                params[:email],
        phone:                params[:phone],
        time_in:              params[:time_in]
      )
      check_validation_results!(book_order)

      BookOrderMailer.with(
        book_order: book_order
      ).new_book_order_email.deliver_later

      render_success_result(status: :created)
    end
  end
end
