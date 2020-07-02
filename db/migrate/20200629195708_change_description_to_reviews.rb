# frozen_string_literal: true

class ChangeDescriptionToReviews < ActiveRecord::Migration[6.0]
  def change
    change_column(:hotel_rooms, :description, :text)
  end
end
