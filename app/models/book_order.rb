# frozen_string_literal: true

class BookOrder < ApplicationRecord
  belongs_to :hotel_room
end
