# frozen_string_literal: true

module Hotel
  class ServicesController < ApplicationController
    def index
      services = Service.all.map do |service|
        service.as_json.merge(image_link: url_for(service.service_image))
      end

      render_success_result(data: services)
    end
  end
end
