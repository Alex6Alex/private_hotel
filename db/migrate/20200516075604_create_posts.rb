# frozen_string_literal: true

class CreatePosts < ActiveRecord::Migration[6.0]
  def change
    create_table :posts do |t|
      t.string(:name, null: false, unique: true, limit: 100)
      t.string(:image_link, null: false, limit: 100)
      t.text(:content, null: false)

      t.timestamps
    end
  end
end
