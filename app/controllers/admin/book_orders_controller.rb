# frozen_string_literal: true

module Admin
  class BookOrdersController < ApplicationController
    def index
      render_success_result(data: BookOrder.all)
    end
  end
end
