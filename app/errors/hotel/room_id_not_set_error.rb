# frozen_string_literal: true

module Hotel
  class RoomIdNotSetError < BaseError
    def self.build
      new('Room id was not set')
    end
  end
end
