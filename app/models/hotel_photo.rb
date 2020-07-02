# frozen_string_literal: true

class HotelPhoto < ApplicationRecord
  validates(:image_link, presence: true)
end
