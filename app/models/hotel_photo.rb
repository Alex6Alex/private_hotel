# frozen_string_literal: true

class HotelPhoto < ApplicationRecord
  has_one_attached :hotel_photo_attach

  validates(:image_link, presence: true)
end
