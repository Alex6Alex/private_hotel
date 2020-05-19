# frozen_string_literal: true

class BaseError < StandardError
  def http_status
    :internal_server_error
  end
end
