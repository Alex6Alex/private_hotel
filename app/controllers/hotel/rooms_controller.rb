# frozen_string_literal: true

module Hotel
  class RoomsController < ApplicationController
    def index
      rooms = HotelRoom.all.map do |room|
        room_hash = room.as_json
        room_hash[:image_links] = room.hotel_room_images.map(&:image_link)
        room_hash
      end
      render_success_result(rooms: rooms)
    end

    def show
      room = HotelRoom.find_by(id: params[:id])
      raise(Hotel::RoomNotFoundError) if room.blank?

      room_hash = room.as_json
      room_hash[:image_links] = room.hotel_room_images.map(&:image_link)

      render_success_result(room: room_hash)
    end
  end
end
