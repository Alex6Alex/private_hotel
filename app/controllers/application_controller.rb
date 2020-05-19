# frozen_string_literal: true

class ApplicationController < ActionController::Base
  rescue_from(StandardError) do |exc|
    render_failed_result(exc.message, :internal_server_error)
  end

  rescue_from(BaseError) do |exc|
    render_failed_result(exc.message, exc.http_status)
  end


  protected

  def render_success_result(data, status = :ok)
    render(
      status: status,
      json: {
        success: true,
        data: data
      }
    )
  end

  def render_failed_result(data, status)
    render(
      status: status,
      json: {
        success: false,
        data: data
      }
    )
  end
end
