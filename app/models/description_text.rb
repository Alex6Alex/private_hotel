# frozen_string_literal: true

class DescriptionText < ApplicationRecord
  ABOUT_HOTEL_DESCRIPTION = 'about_hotel_description'

  validates(
    :name,
    presence: true,
    length: 5..100,
    inclusion: [ABOUT_HOTEL_DESCRIPTION]
  )
  validates(:description, presence: true)

  def self.about_hotel
    find_by(name: ABOUT_HOTEL_DESCRIPTION)
  end
end
