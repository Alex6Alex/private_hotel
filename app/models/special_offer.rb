# frozen_string_literal: true

class SpecialOffer < ApplicationRecord
  validates(:name, :content, presence: true)
  validates(:name, length: 5..100)
end
