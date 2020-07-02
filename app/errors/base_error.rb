# frozen_string_literal: true

class BaseError < StandardError
  def initialize(message, errors = [])
    super(message)
    @errors = errors
  end

  def errors
    @errors || [message]
  end

  def http_status
    :internal_server_error
  end
end
