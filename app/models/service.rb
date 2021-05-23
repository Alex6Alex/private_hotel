# frozen_string_literal: true

class Service < ApplicationRecord
  has_one_attached :service_image

  validates(:name, :image_link, presence: true)
  validates(:name, length: 3..100)
end
