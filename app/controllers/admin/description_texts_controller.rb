# frozen_string_literal: true

module Admin
  class DescriptionTextsController < ApplicationController
    def index
      render_success_result(DescriptionText.all)
    end

    def create
      raise('Required fields does not set') if params[:name].blank?

      description = DescriptionText.create(name: params[:name], description: params[:description])
      render_success_result(description, :created)
    end

    def show
      description = DescriptionText.find_by(id: params[:id])
      raise('Incorrect id') if description.nil?

      render_success_result(description)
    end

    def update
      description = DescriptionText.find_by(id: params[:id])
      raise('Incorrect id') if description.nil?

      description.update(name: params[:name], description: params[:description])
      render_success_result(description)
    end

    def destroy
      description = DescriptionText.find_by(id: params[:id])
      raise('incorrect id') if description.nil?

      description.delete
      render_success_result({})
    end
  end
end
