# frozen_string_literal: true

class ConferenceRoomImage < ApplicationRecord
  validates(:image_link, presence: true)

  belongs_to :conference_room
end
