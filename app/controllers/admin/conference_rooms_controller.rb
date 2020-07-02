# frozen_string_literal: true

module Admin
  class ConferenceRoomsController < ApplicationController
    def index
      render_success_result(data: ConferenceRoom.all)
    end

    def create
      tmp_file  = params[:plan_image]
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

    def show
      conference_room = ConferenceRoom.find_by(id: params[:id])
      raise(RecordNotFoundError.build) if conference_room.nil?

      render_success_result(data: conference_room)
    end

    def update
      conference_room = ConferenceRoom.find_by(id: params[:id])
      raise(RecordNotFoundError.build) if conference_room.nil?

      file_name = conference_room.plan_image_link
      tmp_file  = params[:plan_image]

      if tmp_file.present?
        file_name = FileUploader.new.upload(
          tempfile: tmp_file.tempfile,
          dir: '/images/conference_rooms',
          ext: 'jpeg'
        )
        FileUtils.remove_file(
          [Rails.public_path, conference_room.plan_image_link].join
        )
      end

      conference_room.update(
        name:            params[:name],
        description:     params[:description],
        person_capacity: params[:person_capacity],
        plan_image_link: file_name
      )
      check_validation_results!(conference_room)

      render_success_result(data: conference_room)
    end

    def destroy
      conference_room = ConferenceRoom.find_by(id: params[:id])
      raise(RecordNotFoundError.build) if conference_room.nil?

      FileUtils.remove_file(
        [Rails.public_path, conference_room.plan_image_link].join
      )

      conference_room.delete
      render_success_result
    end
  end
end
