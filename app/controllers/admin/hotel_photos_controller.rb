# frozen_string_literal: true

module Admin
  class HotelPhotosController < ApplicationController
    def index
      render_success_result(data: HotelPhoto.all)
    end

    def create
      tmp_file = params[:hotel_photo]
      raise(Admin::FileWasNotSetError.build) if tmp_file.blank?

      unless tmp_file.content_type == 'image/jpeg'
        raise(Admin::InvalidFileExtensionError.build)
      end

      file_name = FileUploader.new.upload(
        tempfile: tmp_file.tempfile,
        dir: '/images/hotel_photos',
        ext: 'jpeg'
      )

      hotel_photo = HotelPhoto.create(image_link: file_name)
      check_validation_results!(hotel_photo)

      render_success_result(data: hotel_photo, status: :created)
    end

    def destroy
      hotel_photo = HotelPhoto.find_by(id: params[:id])
      raise(RecordNotFoundError.build) if hotel_photo.nil?

      FileUtils.remove_file([Rails.public_path, hotel_photo.image_link].join)

      hotel_photo.delete
      render_success_result
    end
  end
end
