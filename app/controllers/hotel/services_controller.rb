# frozen_string_literal: true

module Hotel
  class ServicesController < ApplicationController
    def index
      render_success_result(data: Service.all)
    end
  end
end
