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

      file_name = FileUploader.new.upload(
        tempfile: tmp_file.tempfile,
        dir: '/images/services',
        ext: 'png'
      )

      service = Service.create(name: params[:name], image_link: file_name)
      check_validation_results!(service)

      render_success_result(data: service, status: :created)
    end

    def update
      file_name = @record.image_link
      tmp_file  = params[:image_file]

      if tmp_file.present?
        file_name = FileUploader.new.upload(
          tempfile: tmp_file.tempfile,
          dir: '/images/services',
          ext: 'png'
        )
        FileUtils.remove_file([Rails.public_path, @record.image_link].join)
      end

      @record.update(name: params[:name], image_link: file_name)
      check_validation_results!(@record)

      render_success_result(data: @record)
    end

    def destroy
      FileUtils.remove_file([Rails.public_path, @record.image_link].join)

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
