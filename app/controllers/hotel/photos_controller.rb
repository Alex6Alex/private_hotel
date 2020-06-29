# frozen_string_literal: true

module Hotel
  class PhotosController < ApplicationController
    def index
      render_success_result(HotelPhoto.all)
    end
  end
end
