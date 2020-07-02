# frozen_string_literal: true

module Admin
  class ServicesController < ApplicationController
    def index
      render_success_result(data: Service.all)
    end

    def create
      tmp_file  = params[:image_file]
      raise(Admin::FileWasNotSetError.build) if tmp_file.blank?

      unless tmp_file.content_type == 'image/png'
        raise(Admin::InvalidFileExtensionError.build)
      end

      file_name = FileUploader.new.upload(
        tempfile: tmp_file.tempfile,
        dir: '/images/services',
        ext: 'png'
      )

      service = Service.create(name: params[:name], image_link: file_name)
      check_validation_results!(service)

      render_success_result(data: service, status: :created)
    end

    def show
      service = Service.find_by(id: params[:id])
      raise(RecordNotFoundError.build) if service.nil?

      render_success_result(data: service)
    end

    def update
      service = Service.find_by(id: params[:id])
      raise(RecordNotFoundError.build) if service.nil?

      file_name = service.image_link
      tmp_file  = params[:image_file]

      if tmp_file.present?
        file_name = FileUploader.new.upload(
          tempfile: tmp_file.tempfile,
          dir: '/images/services',
          ext: 'png'
        )
        FileUtils.remove_file([Rails.public_path, service.image_link].join)
      end

      service.update(name: params[:name], image_link: file_name)
      check_validation_results!(service)

      render_success_result(data: service)
    end

    def destroy
      service = Service.find_by(id: params[:id])
      raise(RecordNotFoundError.build) if service.nil?

      FileUtils.remove_file([Rails.public_path, service.image_link].join)

      service.delete
      render_success_result
    end
  end
end
