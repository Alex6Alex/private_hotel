# frozen_string_literal: true

module Admin
  class ConferenceRoomImagesController < ApplicationController
    def index
      render_success_result(
        data: ConferenceRoom.preload(:conference_room_images).as_json(
          only:    %i[id name],
          include: :conference_room_images
        )
      )
    end

    def create
      conference_room = ConferenceRoom.find_by(id: params[:conference_room_id])
      raise(RecordNotFoundError.build) if conference_room.nil?

      tmp_file = params[:conference_room_image]
      raise(Admin::FileWasNotSetError.build) if tmp_file.blank?

      unless tmp_file.content_type == 'image/jpeg'
        raise(Admin::InvalidFileExtensionError.build)
      end

      file_name = FileUploader.new.upload(
        tempfile: tmp_file.tempfile,
        dir: '/images/conference_room_images',
        ext: 'jpeg'
      )

      conference_room_image = ConferenceRoomImage.create(
        conference_room_id: conference_room.id,
        image_link: file_name
      )
      check_validation_results!(conference_room_image)

      render_success_result(
        data: conference_room.as_json(
          only: %i[id name],
          include: :conference_room_images
        ),
        status: :created
      )
    end

    def destroy
      conference_room_image = ConferenceRoomImage.find_by(id: params[:id])
      raise(RecordNotFoundError.build) if conference_room_image.nil?

      FileUtils.remove_file(
        [Rails.public_path, conference_room_image.image_link].join
      )

      room = ConferenceRoom.find_by(
        id: conference_room_image.conference_room_id
      )
      conference_room_image.delete

      render_success_result(
        data: room.as_json(only: %i[id name], include: :conference_room_images)
      )
    end
  end
end
