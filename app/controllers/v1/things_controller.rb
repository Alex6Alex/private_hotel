# frozen_string_literal: true

module V1
  class ThingsController < ApplicationController
    def contacts
      render(
        json: {
          contacts: [
            {
              name: 'Организация конференций',
              phone: '+79781234556',
              email: 'organization@mail.ru'
            },
            {
              name: 'Бронирование номеров',
              phone: '+79781234567',
              email: 'book@mail.ru',
              priority: true
            },
            {
              name: 'Кафе',
              phone: '+79781234578',
              email: 'cafee@mail.ru'
            }
          ]
        }
      )
    end
  end
end
