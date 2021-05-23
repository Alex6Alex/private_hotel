# frozen_string_literal: true

module Admin
  class HotelPhotosController < ApplicationController
    def index
      photos = HotelPhoto.all.map do |photo|
        photo.as_json.merge(image_link: url_for(photo.hotel_photo_attach))
      end

      render_success_result(data: photos)
    end

    def create
      tmp_file = params[:hotel_photo]
      raise(Admin::FileWasNotSetError.build) if tmp_file.blank?

      unless tmp_file.content_type == 'image/jpeg'
        raise(Admin::InvalidFileExtensionError.build)
      end

      hotel_photo = HotelPhoto.create(
        hotel_photo_attach: tmp_file, image_link: tmp_file.original_filename
      )
      check_validation_results!(hotel_photo)

      render_success_result(
        data: hotel_photo.as_json.merge(
          image_link: url_for(hotel_photo.hotel_photo_attach)
        ),
        status: :created
      )
    end

    def destroy
      hotel_photo = HotelPhoto.find_by(id: params[:id])
      raise(RecordNotFoundError.build) if hotel_photo.nil?

      hotel_photo.hotel_photo_attach.purge_later
      hotel_photo.delete

      render_success_result
    end
  end
end
