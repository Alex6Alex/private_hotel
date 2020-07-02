# frozen_string_literal: true

class BookOrder < ApplicationRecord
  validates(
    :hotel_room_id,
    :arrival_date,
    :departure_date,
    :guests_with_place,
    :guests_without_place,
    :email,
    :phone,
    :time_in,
    presence: true
  )
  validates(:guests_with_place, numericality: { only_integer: true })
  validates(:guests_without_place, numericality: { only_integer: true })
  validates(:email, format: /@/)
  validates(:time_in, inclusion: %w[12:00 13:00 14:00 15:00 16:00 17:00])
  validate(:date_format)

  belongs_to :hotel_room

  def date_format
    unless date_valid?(arrival_date, Date.today)
      errors.add(:arrival_date, 'can\'t be in past')
    end
    unless date_valid?(departure_date, arrival_date)
      errors.add(:departure_date, 'must be after arrival date')
    end
  end

  def date_valid?(date, check_date)
    return false if date.blank? || check_date.blank?
    date > check_date
  end
end
