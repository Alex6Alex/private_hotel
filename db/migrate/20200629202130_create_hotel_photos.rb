class CreateHotelPhotos < ActiveRecord::Migration[6.0]
  def change
    create_table :hotel_photos do |t|
      t.string(:image_link, null: false, limit: 250)
    end
  end
end
