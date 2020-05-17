# frozen_string_literal: true

class CreateHotelRoomImages < ActiveRecord::Migration[6.0]
  def change
    create_table :hotel_room_images do |t|
      t.bigint(:hotel_room_id, null: false)
      t.string(:image_link, null: false, limit: 100)

      t.timestamps
    end

    add_foreign_key(
      :hotel_room_images,
      :hotel_rooms,
      on_update: :cascade,
      on_delete: :cascade
    )

    add_index(:hotel_room_images, %i[hotel_room_id image_link], unique: true)
  end
end
