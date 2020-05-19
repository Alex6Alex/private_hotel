# frozen_string_literal: true

module Admin
  class RequestHeaderNotSetError < BaseError
    def self.build
      new('Required request header was not set')
    end

    def http_status
      :bad_request
    end
  end
end
