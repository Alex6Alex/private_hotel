# frozen_string_literal: true

class RecordNotFoundError < BaseError
  def self.build
    new('Requested record was not found')
  end

  def http_status
    :not_found
  end
end
