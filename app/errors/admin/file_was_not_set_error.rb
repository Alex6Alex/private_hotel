# frozen_string_literal: true

module Admin
  class FileWasNotSetError < BaseError
    def self.build
      new('File was not set')
    end

    def http_status
      :bad_request
    end
  end
end
