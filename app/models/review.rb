# frozen_string_literal: true

class Review < ApplicationRecord
  validates(:guest_name, presence: true, length: 5..30)
  validates(:email, presence: true, format: /@/)
  validates(:content, presence: true, length: 5..250)
end
