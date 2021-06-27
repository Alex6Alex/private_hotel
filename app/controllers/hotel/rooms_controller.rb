# frozen_string_literal: true

module Hotel
  class RoomsController < ApplicationController
    def index
      rooms = HotelRoom.all.map do |room|
        images = room.hotel_room_photos.map do |photo|
          { id: photo.id, image_link: url_for(photo) }
        end

        room.as_json.merge(hotel_room_images: images)
      end

      render_success_result(data: rooms)
    end

    def show
      room = HotelRoom.find_by(id: params[:id])
      raise(RecordNotFoundError) if room.blank?

      images = room.hotel_room_photos.map do |photo|
        { id: photo.id, image_link: url_for(photo) }
      end

      render_success_result(
        data: room.as_json.merge(hotel_room_images: images)
      )
    end
  end
end
