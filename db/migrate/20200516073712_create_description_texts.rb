# frozen_string_literal: true

class CreateDescriptionTexts < ActiveRecord::Migration[6.0]
  def change
    create_table :description_texts do |t|
      t.string(:name, null: false, limit: 100, unique: true)
      t.text(:description, null: false)

      t.timestamps
    end
  end
end
