# frozen_string_literal: true

class CreateServices < ActiveRecord::Migration[6.0]
  def change
    create_table :services do |t|
      t.string(:name, null: false, limit: 100)
      t.string(:image_link, null: false, limit: 250)

      t.timestamps
    end
  end
end
