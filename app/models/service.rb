# frozen_string_literal: true

class Service < ApplicationRecord
  validates(:name, :image_link, presence: true)
  validates(:name, length: 3..100)
end
