# frozen_string_literal: true

class Services
  def self.all
    @services
  end

  @services = [
    { id: 1, name: 'Обслуживание номеров', image_link: 'images/transfer.png' },
    { id: 2, name: 'Мини-бар', image_link: 'images/transfer.png' },
    { id: 3, name: 'Кафе', image_link: 'images/transfer.png' },
    { id: 4, name: 'Чайный/кофейный набор', image_link: 'images/transfer.png' },
    { id: 5, name: 'Камера хранения', image_link: 'images/transfer.png' },
    { id: 6, name: 'Автостоянка', image_link: 'images/transfer.png' },
    { id: 7, name: 'Сейф в номере', image_link: 'images/transfer.png' },
    { id: 8, name: 'Международный телефон', image_link: 'images/transfer.png' },
    { id: 9, name: 'Бесплатный завтрак', image_link: 'images/transfer.png' },
    { id: 10, name: 'Трансфер', image_link: 'images/transfer.png' }
  ]
end
