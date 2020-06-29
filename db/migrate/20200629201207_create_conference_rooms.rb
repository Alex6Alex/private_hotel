# frozen_string_literal: true

class CreateConferenceRooms < ActiveRecord::Migration[6.0]
  def change
    create_table :conference_rooms do |t|
      t.string(:name, null: false, unique: true, limit: 100)
      t.text(:description, null: false)
      t.string(:plan_image_link, null: false, limit: 250)
      t.integer(:person_capacity, null: false)

      t.timestamps
    end
  end
end
