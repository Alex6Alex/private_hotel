# frozen_string_literal: true

module Hotel
  class RoomsController < ApplicationController
    def index
      render_success_result(
        data: HotelRoom.all.as_json(include: :hotel_room_images)
      )
    end

    def show
      room = HotelRoom.find_by(id: params[:id])
      raise(RecordNotFoundError) if room.blank?

      render_success_result(data: room.as_json(include: :hotel_room_images))
    end
  end
end
