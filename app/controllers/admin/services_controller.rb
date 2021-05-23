# frozen_string_literal: true

module Admin
  class ServicesController < ApplicationController
    include Recordable

    before_action :find_service, only: %i[show update destroy]

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
      render_success_result(
        data: @record.as_json.merge(image_link: url_for(@record.service_image))
      )
    end

    def update
      @record.update(name: params[:name])
      check_validation_results!(@record)

      tmp_file = params[:image_file]
      @record.service_image.attach(tmp_file) if tmp_file.present?

      render_success_result(
        data: @record.as_json.merge(image_link: url_for(@record.service_image))
      )
    end

    def destroy
      @record.service_image.purge_later
      @record.delete

      render_success_result
    end

    private

    def all_records
      Service.all
    end

    def find_service
      @record = Service.find_by(id: params[:id])
      raise(RecordNotFoundError.build) if @record.nil?
    end
  end
end
