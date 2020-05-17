# frozen_string_literal: true

module Hotel
  class ServicesController < ApplicationController
    def index
      render_success_result(services: Service.all)
    end
  end
end
