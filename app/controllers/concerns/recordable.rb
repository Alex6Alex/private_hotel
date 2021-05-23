# frozen_string_literal: true

module Recordable
  extend ActiveSupport::Concern

  def index
    render_success_result(data: all_records)
  end

  def show
    render_success_result(data: @record)
  end

  def destroy
    @record.delete
    render_success_result
  end
end
