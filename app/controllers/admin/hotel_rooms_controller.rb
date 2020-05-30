# frozen_string_literal: true

module Admin
  class HotelRoomsController < ApplicationController
    def index
      render_success_result(HotelRoom.all)
    end

    def create
      raise('Required fields does not set') if params[:name].blank?

      hotel_room = HotelRoom.create(
        name:            params[:name],
        description:     params[:description],
        day_price:       params[:day_price],
        currency:        params[:currency],
        person_capacity: params[:person_capacity],
        room_area:       params[:room_area],
        count_of_rooms:  params[:count_of_rooms]
      )
      render_success_result(hotel_room, :created)
    end

    def show
      hotel_room = HotelRoom.find_by(id: params[:id])
      raise('Incorrect id') if hotel_room.nil?

      render_success_result(hotel_room)
    end

    def update
      hotel_room = HotelRoom.find_by(id: params[:id])
      raise('Incorrect id') if hotel_room.nil?

      hotel_room.update(
        name:            params[:name],
        description:     params[:description],
        day_price:       params[:day_price],
        currency:        params[:currency],
        person_capacity: params[:person_capacity],
        room_area:       params[:room_area],
        count_of_rooms:  params[:count_of_rooms]
      )
      render_success_result(hotel_room)
    end

    def destroy
      hotel_room = HotelRoom.find_by(id: params[:id])
      raise('incorrect id') if hotel_room.nil?

      hotel_room.delete
      render_success_result({})
    end
  end
end
