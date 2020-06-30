# frozen_string_literal: true

module Admin
  class HotelPhotosController < ApplicationController
    def index
      render_success_result(HotelPhoto.all)
    end

    def create
      tmp_file = params[:hotel_photo]
      raise('Required fields does not set') if tmp_file.blank?

      if tmp_file.content_type == 'image/jpeg'
        file_name = FileUploader.new.upload(
          tempfile: tmp_file.tempfile,
          dir: '/images/hotel_photos',
          ext: 'jpeg'
        )

        hotel_photo = HotelPhoto.create(image_link: file_name)
        return render_success_result(hotel_photo, :created)
      end

      raise('incorrect extension')
    end

    def destroy
      # service = Service.find_by(id: params[:id])
      # raise('incorrect id') if service.nil?
      #
      # FileUtils.remove_file([Rails.public_path, service.image_link].join)
      #
      # service.delete
      # render_success_result({})
    end
  end
end
