class CreateConferenceRoomImages < ActiveRecord::Migration[6.0]
  def change
    create_table :conference_room_images do |t|
      t.bigint(:conference_room_id, null: false)
      t.string(:image_link, null: false, limit: 100)

      t.timestamps
    end

    add_foreign_key(
      :conference_room_images,
      :conference_rooms,
      on_update: :cascade,
      on_delete: :cascade
    )

    add_index(
      :conference_room_images,
      %i[conference_room_id image_link],
      unique: true,
      name: 'conference_room_image_unique'
    )
  end
end
