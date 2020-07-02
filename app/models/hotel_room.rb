# frozen_string_literal: true

class HotelRoom < ApplicationRecord
  validates(
    :name,
    :description,
    :day_price,
    :currency,
    :person_capacity,
    :room_area,
    :count_of_rooms,
    presence: true
  )
  validates(:name, length: 5..100)
  validates(:room_area, :day_price, numericality: true)
  validates(:currency, length: 2..3)
  validates(
    :count_of_rooms,
    :person_capacity,
    numericality: { only_integer: true }
  )

  has_many :hotel_room_images
  has_many :book_orders
end
