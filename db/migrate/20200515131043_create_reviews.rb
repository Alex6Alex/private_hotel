# frozen_string_literal: true

class CreateReviews < ActiveRecord::Migration[6.0]
  def change
    create_table :reviews do |t|
      t.string(:guest_name, null: false, limit: 100)
      t.string(:email, null: false, limit: 100)
      t.text(:content, null: false, limit: 250)

      t.timestamps
    end
  end
end
