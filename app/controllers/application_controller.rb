# frozen_string_literal: true

class ApplicationController < ActionController::Base
  rescue_from(StandardError) do |exc|
    render_error_result(exc)
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

  def render_error_result(exc)
    render(
      status: 500,
      json: {
        success: false,
        data: exc.message
      }
    )
  end
end
