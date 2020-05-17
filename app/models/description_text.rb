# frozen_string_literal: true

class DescriptionText < ApplicationRecord
  def self.about_hotel
    find_by(name: 'about_hotel_description')
  end
end
