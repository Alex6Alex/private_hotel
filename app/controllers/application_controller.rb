# frozen_string_literal: true

class ApplicationController < ActionController::Base
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
end
