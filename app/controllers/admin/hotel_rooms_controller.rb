# frozen_string_literal: true

module Admin
  class HotelRoomsController < ApplicationController
    def index
      render_success_result(data: HotelRoom.all)
    end

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

    def show
      hotel_room = HotelRoom.find_by(id: params[:id])
      raise(RecordNotFoundError.build) if hotel_room.nil?

      render_success_result(data: hotel_room)
    end

    def update
      hotel_room = HotelRoom.find_by(id: params[:id])
      raise(RecordNotFoundError.build) if hotel_room.nil?

      hotel_room.update(
        name:            params[:name],
        description:     params[:description],
        day_price:       params[:day_price],
        currency:        params[:currency],
        person_capacity: params[:person_capacity],
        room_area:       params[:room_area],
        count_of_rooms:  params[:count_of_rooms]
      )
      check_validation_results!(hotel_room)

      render_success_result(data: hotel_room)
    end

    def destroy
      hotel_room = HotelRoom.find_by(id: params[:id])
      raise(RecordNotFoundError.build) if hotel_room.nil?

      hotel_room.delete
      render_success_result
    end
  end
end
