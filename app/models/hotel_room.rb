# frozen_string_literal: true

class HotelRoom < ApplicationRecord
  has_many :hotel_room_images
  has_many :book_orders
end
