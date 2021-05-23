# frozen_string_literal: true

module Admin
  class ServicesController < ApplicationController
    def index
      render_success_result(data: Service.all)
    end

    def create
      tmp_file = params[:image_file]
      raise(Admin::FileWasNotSetError.build) if tmp_file.blank?

      unless tmp_file.content_type == 'image/png'
        raise(Admin::InvalidFileExtensionError.build)
      end

      service = Service.create(
        name: params[:name],
        service_image: tmp_file,
        image_link: tmp_file.original_filename
      )
      check_validation_results!(service)

      render_success_result(
        data: service.as_json.merge(image_link: url_for(service.service_image)),
        status: :created
      )
    end

    def show
      service = Service.find_by(id: params[:id])
      raise(RecordNotFoundError.build) if service.nil?

      render_success_result(
        data: service.as_json.merge(image_link: url_for(service.service_image))
      )
    end

    def update
      service = Service.find_by(id: params[:id])
      raise(RecordNotFoundError.build) if service.nil?

      service.update(name: params[:name])
      check_validation_results!(service)

      tmp_file = params[:image_file]
      service.service_image.attach(tmp_file) if tmp_file.present?

      render_success_result(
        data: service.as_json.merge(image_link: url_for(service.service_image))
      )
    end

    def destroy
      service = Service.find_by(id: params[:id])
      raise(RecordNotFoundError.build) if service.nil?

      service.service_image.purge_later
      service.delete

      render_success_result
    end
  end
end
