class RemoveHotelRoomImagesTable < ActiveRecord::Migration[6.1]
  def change
    drop_table(:hotel_room_images)
  end
end
