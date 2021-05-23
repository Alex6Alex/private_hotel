# frozen_string_literal: true

class ApplicationController < ActionController::Base
  rescue_from(StandardError) do |exc|
    render_failed_result(errors: [exc.message])
  end

  rescue_from(BaseError) do |exc|
    render_failed_result(errors: exc.errors, status: exc.http_status)
  end

  protected

  def render_success_result(data: nil, status: :ok)
    render(
      status: status,
      json: {
        success: true,
        data: data
      }
    )
  end

  def render_failed_result(errors: [], status: :internal_server_error)
    render(
      status: status,
      json: {
        error_code: status,
        success: false,
        errors: errors
      }
    )
  end

  def check_validation_results!(record)
    unless record.valid?
      raise(RecordValidationError.build(record.errors.full_messages))
    end
  end
end
