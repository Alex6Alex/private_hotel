# frozen_string_literal: true

class CreateBookOrders < ActiveRecord::Migration[6.0]
  def change
    create_table :book_orders do |t|
      t.bigint(:hotel_room_id, null: false)
      t.date(:arrival_date, null: false)
      t.date(:departure_date, null: false)
      t.integer(:guests_with_place, null: false)
      t.integer(:guests_without_place, null: false)
      t.string(:email, null: false)
      t.string(:phone, null: false)
      t.string(:time_in, null: false)

      t.timestamps
    end

    add_foreign_key(
      :book_orders,
      :hotel_rooms,
      on_update: :cascade,
      on_delete: :restrict
    )
  end
end
