# frozen_string_literal: true

module Hotel
  class ConferenceRoomsController < ApplicationController
    def index
      render_success_result(
        data: ConferenceRoom.last.as_json(include: :conference_room_images)
      )
    end
  end
end
