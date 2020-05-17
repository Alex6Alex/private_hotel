# frozen_string_literal: true

module Hotel
  class BookOrderValidator
    def initialize(params)
      @params = params
    end

    def inspect
      inspect_room_id
      inspect_dates
      inspect_guests_count
      inspect_contacts
      inspect_time
    end

    def inspect_room_id
      raise(Hotel::RoomIdNotSetError.build) if @params[:hotel_room_id].blank?
    end

    def inspect_dates
      raise 'Arrival date was not set' if @params[:date_in].blank?

      raise 'Departure date was not set' if @params[:date_out].blank?

      raise 'Arrival date can not be less than tomorrow' if Date.parse(@params[:date_in]) < Date.tomorrow

      if Date.parse(@params[:date_out]) <= Date.parse(@params[:date_in])
        raise 'Departure date can not be less than arrival date'
      end
    end

    def inspect_guests_count
      # raise ""
    end

    def inspect_contacts
      raise 'Email was not set' if @params[:email].blank?
      raise 'Phone was not set' if @params[:phone].blank?
    end

    def inspect_time
      raise 'Time was not set' if @params[:time_in].blank?
    end
  end
end
