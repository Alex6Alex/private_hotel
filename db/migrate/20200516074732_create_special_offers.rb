# frozen_string_literal: true

class CreateSpecialOffers < ActiveRecord::Migration[6.0]
  def change
    create_table :special_offers do |t|
      t.string(:name, null: false, unique: true, limit: 100)
      t.string(:image_link, null: false, limit: 100)
      t.text(:content, null: false)

      t.timestamps
    end
  end
end
