# frozen_string_literal: true

module Admin
  class HotelRoomsController < ApplicationController
    include Recordable

    before_action :find_hotel_room, only: %i[show update destroy]

    def create
      hotel_room = HotelRoom.create(
        name:            params[:name],
        description:     params[:description],
        day_price:       params[:day_price],
        currency:        params[:currency],
        person_capacity: params[:person_capacity],
        room_area:       params[:room_area],
        count_of_rooms:  params[:count_of_rooms]
      )
      check_validation_results!(hotel_room)

      render_success_result(data: hotel_room, status: :created)
    end

    def update
      @record.update(
        name:            params[:name],
        description:     params[:description],
        day_price:       params[:day_price],
        currency:        params[:currency],
        person_capacity: params[:person_capacity],
        room_area:       params[:room_area],
        count_of_rooms:  params[:count_of_rooms]
      )
      check_validation_results!(@record)

      render_success_result(data: @record)
    end

    private

    def all_records
      HotelRoom.all
    end

    def find_hotel_room
      @record = HotelRoom.find_by(id: params[:id])
      raise(RecordNotFoundError.build) if @record.nil?
    end
  end
end
