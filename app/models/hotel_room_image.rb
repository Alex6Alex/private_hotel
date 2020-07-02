# frozen_string_literal: true

class HotelRoomImage < ApplicationRecord
  validates(:image_link, presence: true)

  belongs_to :hotel_room
end
