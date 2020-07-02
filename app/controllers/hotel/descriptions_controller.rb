# frozen_string_literal: true

module Hotel
  class DescriptionsController < ApplicationController
    def about_hotel
      render_success_result(data: DescriptionText.about_hotel.description)
    end
  end
end
