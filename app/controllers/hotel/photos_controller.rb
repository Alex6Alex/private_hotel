# frozen_string_literal: true

module Hotel
  class PhotosController < ApplicationController
    def index
      photos = HotelPhoto.all.map do |photo|
        photo.as_json.merge(image_link: url_for(photo.hotel_photo_attach))
      end

      render_success_result(data: photos)
    end
  end
end
