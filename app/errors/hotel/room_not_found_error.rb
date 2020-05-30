# frozen_string_literal: true

module Hotel
  class RoomNotFoundError < BaseError
    def self.build
      new('Requested room was not found')
    end

    def http_status
      # :not_found (404)
    end
  end
end
