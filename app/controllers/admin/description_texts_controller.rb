# frozen_string_literal: true

module Admin
  class DescriptionTextsController < ApplicationController
    def index
      render_success_result(data: DescriptionText.all)
    end

    def create
      description = DescriptionText.create(
        name:        params[:name],
        description: params[:description]
      )
      check_validation_results!(description)

      render_success_result(data: description, status: :created)
    end

    def show
      description = DescriptionText.find_by(id: params[:id])
      raise(RecordNotFoundError.build) if description.nil?

      render_success_result(data: description)
    end

    def update
      description = DescriptionText.find_by(id: params[:id])
      raise(RecordNotFoundError.build) if description.nil?

      description.update(
        name:        params[:name],
        description: params[:description]
      )
      check_validation_results!(description)

      render_success_result(data: description)
    end

    def destroy
      description = DescriptionText.find_by(id: params[:id])
      raise(RecordNotFoundError.build) if description.nil?

      description.delete
      render_success_result
    end
  end
end
