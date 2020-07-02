class RemoveImageLinkFromSpecialOffers < ActiveRecord::Migration[6.0]
  def change
    remove_column(:special_offers, :image_link)
  end
end
