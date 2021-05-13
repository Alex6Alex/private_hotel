# frozen_string_literal: true

module Admin
  class ConferenceRoomsController < ApplicationController
    include Recordable

    before_action :find_conference_room, only: %i[show update destroy]

    def create
      tmp_file = params[:plan_image]
      raise(Admin::FileWasNotSetError.build) if tmp_file.blank?

      unless tmp_file.content_type == 'image/jpeg'
        raise(Admin::InvalidFileExtensionError.build)
      end

      file_name = FileUploader.new.upload(
        tempfile: tmp_file.tempfile,
        dir: '/images/conference_rooms',
        ext: 'jpeg'
      )

      conference_room = ConferenceRoom.create(
        name:            params[:name],
        description:     params[:description],
        person_capacity: params[:person_capacity],
        plan_image_link: file_name
      )
      check_validation_results!(conference_room)

      render_success_result(data: conference_room, status: :created)
    end

    def update
      file_name = @record.plan_image_link
      tmp_file  = params[:plan_image]

      if tmp_file.present?
        file_name = FileUploader.new.upload(
          tempfile: tmp_file.tempfile,
          dir: '/images/conference_rooms',
          ext: 'jpeg'
        )
        FileUtils.remove_file(
          [Rails.public_path, @record.plan_image_link].join
        )
      end

      @record.update(
        name:            params[:name],
        description:     params[:description],
        person_capacity: params[:person_capacity],
        plan_image_link: file_name
      )
      check_validation_results!(@record)

      render_success_result(data: @record)
    end

    def destroy
      FileUtils.remove_file(
        [Rails.public_path, @record.plan_image_link].join
      )

      @record.delete
      render_success_result
    end

    private

    def all_records
      ConferenceRoom.all
    end

    def find_conference_room
      @record = ConferenceRoom.find_by(id: params[:id])
      raise(RecordNotFoundError.build) if @record.nil?
    end
  end
end
