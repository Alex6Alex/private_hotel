# frozen_string_literal: true

class BookOrder
  def self.all
    @book_orders
  end

  def self.create(
    room_id:,
    date_in:,
    date_out:,
    guest_with_place:,
    guest_without_place:,
    email:,
    phone:,
    time_in:
  )
    @book_orders << {
      id: 1,
      room_id: room_id,
      date_in: date_in,
      date_out: date_out,
      guest_with_place: guest_with_place,
      guest_without_place: guest_without_place,
      email: email,
      phone: phone,
      time_in: time_in
    }
    @book_orders.last
  end

  @book_orders = []
end
