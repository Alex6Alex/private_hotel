# frozen_string_literal: true

class Contact < ApplicationRecord
  validates(:name, :phone, :email, presence: true)
  validates(:name, length: 3..100)
  validates(:email, format: /@/)
end
