# frozen_string_literal: true

class AddApprovedToBookOrders < ActiveRecord::Migration[6.0]
  def change
    add_column(:book_orders, :approved, :boolean, default: false)
  end
end
