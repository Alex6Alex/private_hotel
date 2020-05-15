# frozen_string_literal: true

module Hotel
  class RoomNotFoundError < BaseError
    def self.build
      new('Requested room was not found')
    end
  end
end
