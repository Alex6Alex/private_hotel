# frozen_string_literal: true

class ConferenceRoom < ApplicationRecord
  validates(
    :name,
    :description,
    :plan_image_link,
    :person_capacity,
    presence: true
  )
  validates(:name, length: 5..100)
  validates(:person_capacity, numericality: { only_integer: true })

  has_many :conference_room_images
end
