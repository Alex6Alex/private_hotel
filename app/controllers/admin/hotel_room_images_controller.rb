# frozen_string_literal: true

module Admin
  class HotelRoomImagesController < ApplicationController
    def index
      rooms = HotelRoom.all.map do |room|
        images = room.hotel_room_photos.map do |photo|
          { id: photo.id, image_link: url_for(photo) }
        end

        room.as_json(only: %i[id name]).merge(hotel_room_images: images)
      end

      render_success_result(data: rooms)
    end

    def create
      room = HotelRoom.find_by(id: params[:room_id])
      raise(RecordNotFoundError.build) if room.nil?

      tmp_file = params[:hotel_room_image]
      raise(Admin::FileWasNotSetError.build) if tmp_file.blank?

      unless tmp_file.content_type == 'image/jpeg'
        raise(Admin::InvalidFileExtensionError.build)
      end

      room.hotel_room_photos.attach(tmp_file)

      images = room.hotel_room_photos.map do |photo|
        { id: photo.id, image_link: url_for(photo) }
      end

      render_success_result(
        data: room.as_json(only: %i[id name]).merge(hotel_room_images: images),
        status: :created
      )
    end

    def destroy
      image_attach = ActiveStorage::Attachment.find_by(id: params[:id])
      raise(RecordNotFoundError.build) if image_attach.nil?

      image_attach.purge_later
      render_success_result
    end
  end
end
