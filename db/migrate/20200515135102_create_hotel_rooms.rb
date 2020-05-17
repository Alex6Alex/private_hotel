# frozen_string_literal: true

class CreateHotelRooms < ActiveRecord::Migration[6.0]
  def change
    create_table :hotel_rooms do |t|
      t.string(:name, null: false, unique: true, limit: 100)
      t.text(:description, null: false, limit: 250)
      t.numeric(:day_price, null: false)
      t.string(:currency, null: false, limit: 3)
      t.integer(:person_capacity, null: false)
      t.numeric(:room_area, null: false)
      t.integer(:count_of_rooms, null: false)

      t.timestamps
    end
  end
end
