# frozen_string_literal: true

module Admin
  class WrongLoginCredentialsError < BaseError
    def self.build
      new('Wrong login credentials')
    end

    def http_status
      :unauthorized
    end
  end
end
