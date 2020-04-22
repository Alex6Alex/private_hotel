# frozen_string_literal: true

module Hotel
  class RoomsController < ApplicationController
    def index
      render_success_result(rooms: Room.all)
    end

    def show
      render_success_result(room: Room.find_by(id: params[:id]))
    end
  end
end
