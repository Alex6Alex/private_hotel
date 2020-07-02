class AddPriorityToContacts < ActiveRecord::Migration[6.0]
  def change
    add_column(:contacts, :priority, :boolean, default: false)
  end
end
