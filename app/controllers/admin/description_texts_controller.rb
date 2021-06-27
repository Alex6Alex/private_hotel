# frozen_string_literal: true

module Admin
  class DescriptionTextsController < ApplicationController
    include Recordable

    before_action :find_description_text, only: %i[show update destroy]

    def create
      description = DescriptionText.create(
        name: params[:name], description: params[:description]
      )
      check_validation_results!(description)

      render_success_result(data: description, status: :created)
    end

    def update
      @record.update(name: params[:name], description: params[:description])
      check_validation_results!(@record)

      render_success_result(data: @record)
    end

    private

    def all_records
      DescriptionText.all
    end

    def find_description_text
      @record = DescriptionText.find_by(id: params[:id])
      raise(RecordNotFoundError.build) if @record.nil?
    end
  end
end
