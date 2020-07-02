# frozen_string_literal: true

module Admin
  class HotelRoomImagesController < ApplicationController
    def index
      render_success_result(
        data: HotelRoom.preload(:hotel_room_images).as_json(
          only:    %i[id name],
          include: :hotel_room_images
        )
      )
    end

    def create
      room = HotelRoom.find_by(id: params[:room_id])
      raise(RecordNotFoundError.build) if room.nil?

      tmp_file = params[:hotel_room_image]
      raise(Admin::FileWasNotSetError.build) if tmp_file.blank?

      unless tmp_file.content_type == 'image/jpeg'
        raise(Admin::InvalidFileExtensionError.build)
      end

      file_name = FileUploader.new.upload(
        tempfile: tmp_file.tempfile,
        dir: '/images/hotel_room_images',
        ext: 'jpeg'
      )

      hotel_room_image = HotelRoomImage.create(
        hotel_room_id: room.id,
        image_link: file_name
      )
      check_validation_results!(hotel_room_image)

      render_success_result(
        data: room.as_json(only: %i[id name], include: :hotel_room_images),
        status: :created
      )
    end

    def destroy
      hotel_room_image = HotelRoomImage.find_by(id: params[:id])
      raise(RecordNotFoundError.build) if hotel_room_image.nil?

      FileUtils.remove_file(
        [Rails.public_path, hotel_room_image.image_link].join
      )

      room = HotelRoom.find_by(id: hotel_room_image.hotel_room_id)
      hotel_room_image.delete

      render_success_result(
        data: room.as_json(only: %i[id name], include: :hotel_room_images)
      )
    end
  end
end
