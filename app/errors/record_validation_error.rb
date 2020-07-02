# frozen_string_literal: true

class RecordValidationError < BaseError
  def self.build(errors)
    new('Record validation error', errors)
  end

  def http_status
    :bad_request
  end
end
