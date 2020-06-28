# frozen_string_literal: true

module Admin
  class ServicesController < ApplicationController
    def index
      render_success_result(Service.all)
    end

    def create
      raise('Required fields does not set') if params[:name].blank?

      tmp_file  = params[:image_file]
      file_name = "/images/services/#{Time.now.to_i}.png"
      if tmp_file.content_type == 'image/png'
        FileUtils.mv(tmp_file.tempfile.path, [Rails.public_path, file_name].join)
      end

      service = Service.create(name: params[:name], image_link: file_name)
      render_success_result(service, :created)
    end

    def show
      service = Service.find_by(id: params[:id])
      raise('Incorrect id') if service.nil?

      render_success_result(service)
    end

    def update
      puts params
      service = Service.find_by(id: params[:id])
      raise('Incorrect id') if service.nil?

      tmp_file  = params[:image_file]
      file_name = "/images/services/#{Time.now.to_i}.png"
      if tmp_file.content_type == 'image/png'
        FileUtils.mv(tmp_file.tempfile.path, [Rails.public_path, file_name].join)
      end
      service.update(name: params[:name], image_link: file_name)
      render_success_result(service)
    end

    def destroy
      service = Service.find_by(id: params[:id])
      raise('incorrect id') if service.nil?

      FileUtils.remove_file([Rails.public_path, service.image_link].join)

      service.delete
      render_success_result({})
    end
  end
end
