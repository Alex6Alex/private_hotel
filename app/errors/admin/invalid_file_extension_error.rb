# frozen_string_literal: true

module Admin
  class InvalidFileExtensionError < BaseError
    def self.build
      new('Invalid file extension')
    end

    def http_status
      :bad_request
    end
  end
end
