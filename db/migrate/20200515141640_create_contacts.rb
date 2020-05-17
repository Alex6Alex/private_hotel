# frozen_string_literal: true

class CreateContacts < ActiveRecord::Migration[6.0]
  def change
    create_table :contacts do |t|
      t.string(:name, null: false, limit: 100, unique: true)
      t.string(:phone, null: false, limit: 100)
      t.string(:email, null: false, limit: 100)

      t.timestamps
    end
  end
end
