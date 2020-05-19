class CreateAdministrators < ActiveRecord::Migration[6.0]
  def change
    create_table :administrators do |t|
      t.string(:name, null: false, limit: 100)
      t.string(:password_digest, null: false)
      t.string(:email, null: false, limit: 100)

      t.timestamps
    end
  end
end
