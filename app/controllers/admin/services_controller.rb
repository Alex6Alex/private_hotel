# frozen_string_literal: true

module Admin
  class ServicesController < ApplicationController
    def index
      render_success_result(Service.all)
    end

    def create
      raise('Required fields does not set') if params[:name].blank?

      service = Service.create(name: params[:name], image_link: '/images/Hotel1.jpg')
      render_success_result(service, :created)
    end

    def show
      service = Service.find_by(id: params[:id])
      raise('Incorrect id') if service.nil?

      render_success_result(service)
    end

    def update
      service = Service.find_by(id: params[:id])
      raise('Incorrect id') if service.nil?

      service.update(name: params[:name], image_link: params[:image_link])
      render_success_result(service)
    end

    def destroy
      service = Service.find_by(id: params[:id])
      raise('incorrect id') if service.nil?

      service.delete
      render_success_result({})
    end
  end
end
