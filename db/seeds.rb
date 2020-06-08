# frozen_string_literal: true
# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
#
HotelRoom.create(
  name: 'Стандарт двухместный',
  description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.\nAperiam asperiores cum eligendi explicabo harum impedit incidunt ipsa, maiores minus, molestiae nam odit porro provident, quaerat quam quas rerum sequi totam.",
  day_price: 1000,
  currency: 'RUB',
  person_capacity: 2,
  room_area: 15,
  count_of_rooms: 4
)

HotelRoom.create(
  name: 'Стандарт трехместный',
  description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.\nAperiam asperiores cum eligendi explicabo harum impedit incidunt ipsa, maiores minus, molestiae nam odit porro provident, quaerat quam quas rerum sequi totam.",
  day_price: 1500,
  currency: 'RUB',
  person_capacity: 3,
  room_area: 15,
  count_of_rooms: 4
)

HotelRoom.create(
  name: 'Люкс двухместный',
  description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.\nAperiam asperiores cum eligendi explicabo harum impedit incidunt ipsa, maiores minus, molestiae nam odit porro provident, quaerat quam quas rerum sequi totam.",
  day_price: 2000,
  currency: 'RUB',
  person_capacity: 2,
  room_area: 18,
  count_of_rooms: 4
)

HotelRoom.create(
  name: 'Люкс трехместный',
  description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.\nAperiam asperiores cum eligendi explicabo harum impedit incidunt ipsa, maiores minus, molestiae nam odit porro provident, quaerat quam quas rerum sequi totam.",
  day_price: 2500,
  currency: 'RUB',
  person_capacity: 3,
  room_area: 18,
  count_of_rooms: 4
)

Service.create(name: 'Обслуживание номеров', image_link: 'images/transfer.png')
Service.create(name: 'Мини-бар', image_link: 'images/transfer.png')
Service.create(name: 'Кафе', image_link: 'images/transfer.png')
Service.create(name: 'Чайный/кофейный набор', image_link: 'images/transfer.png')
Service.create(name: 'Камера хранения', image_link: 'images/transfer.png')
Service.create(name: 'Автостоянка', image_link: 'images/transfer.png')
Service.create(name: 'Сейф в номере', image_link: 'images/transfer.png')
Service.create(name: 'Международный телефон', image_link: 'images/transfer.png')
Service.create(name: 'Бесплатный завтрак', image_link: 'images/transfer.png')
Service.create(name: 'Трансфер', image_link: 'images/transfer.png')

Contact.create(name: 'Организация конференций', phone: '+79781234556', email: 'organization@mail.ru')
Contact.create(name: 'Бронирование номеров', phone: '+79781234567', email: 'book@mail.ru')
Contact.create(name: 'Кафе', phone: '+79781234578', email: 'cafee@mail.ru')

DescriptionText.create(
  name: 'about_hotel_description',
  description: "Рады приветствовать Вас в нашем отеле\n
Наш современный отель находится в городе Севастополе, всего в 10
минутах ходьбы от моря, и в 20 минутах езды от центра города.\n
Мы готовы представить Вашему вниманию  двухместные и трехместные номера со
всеми удобствами для комфортной остановки. Номера включают в себя санузел,
телевидение. На территории отеля доступен wi-fi. Присутствует кухня
 общего пользования для приготовления пищи, столовая, а также небольшая
 библиотека.\n
Казачья бухта - это отдаленный от центра район города, здесь расположен
 небольшой жилой микрорайон, дачный поселок и воинские части. В пешей
 доступности песочные и галечные пляжи, которые являются отличным местом
 для дайвинга. Также неподалеку находится музейный историко-мемориальный
 комплекс «35-я береговая батарея».\n
Те, кто путешествуют без машины, с легкостью могут добраться до центра
 Севастополя на маршрутных такси, городских автобусах или троллейбусе.
 В самом центре к Вашим услугам вся возможная индустрия развлечений –
 рестораны, кинотеатры и театры, аквапарк, дельфинарий, детские парки
 развлечений. Исторический центр города привлекает уютными бухтами,
 нарядной набережной с прогулочными яхтами и прибрежными ресторанчиками."
)

SpecialOffer.create(
  name: 'Спец предложение 1',
  image_link: '/images/Hotel1.jpg',
  content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.
Aperiam asperiores cum eligendi explicabo harum impedit incidunt ipsa, maiores minus, molestiae nam odit porro provident, quaerat quam quas rerum sequi totam."
)
SpecialOffer.create(
  name: 'Спец предложение 2',
  image_link: '/images/Hotel2.jpg',
  content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.
Aperiam asperiores cum eligendi explicabo harum impedit incidunt ipsa, maiores minus, molestiae nam odit porro provident, quaerat quam quas rerum sequi totam."
)
SpecialOffer.create(
  name: 'Спец предложение 3',
  image_link: '/images/Hotel3.jpg',
  content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.
Aperiam asperiores cum eligendi explicabo harum impedit incidunt ipsa, maiores minus, molestiae nam odit porro provident, quaerat quam quas rerum sequi totam."
)
SpecialOffer.create(
  name: 'Спец предложение 4',
  image_link: '/images/Hotel4.jpg',
  content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.
Aperiam asperiores cum eligendi explicabo harum impedit incidunt ipsa, maiores minus, molestiae nam odit porro provident, quaerat quam quas rerum sequi totam."
)
SpecialOffer.create(
  name: 'Спец предложение 5',
  image_link: '/images/Hotel3.jpg',
  content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.
Aperiam asperiores cum eligendi explicabo harum impedit incidunt ipsa, maiores minus, molestiae nam odit porro provident, quaerat quam quas rerum sequi totam."
)
SpecialOffer.create(
  name: 'Спец предложение 6',
  image_link: '/images/Hotel2.jpg',
  content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.
Aperiam asperiores cum eligendi explicabo harum impedit incidunt ipsa, maiores minus, molestiae nam odit porro provident, quaerat quam quas rerum sequi totam."
)

Post.create(
  name: 'Новость 1',
  image_link: '/images/Hotel1.jpg',
  content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.
Aperiam asperiores cum eligendi explicabo harum impedit incidunt ipsa, maiores minus, molestiae nam odit porro provident, quaerat quam quas rerum sequi totam."
)
Post.create(
  name: 'Новость 2',
  image_link: '/images/Hotel2.jpg',
  content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.
Aperiam asperiores cum eligendi explicabo harum impedit incidunt ipsa, maiores minus, molestiae nam odit porro provident, quaerat quam quas rerum sequi totam."
)
Post.create(
  name: 'Новость 3',
  image_link: '/images/Hotel3.jpg',
  content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.
Aperiam asperiores cum eligendi explicabo harum impedit incidunt ipsa, maiores minus, molestiae nam odit porro provident, quaerat quam quas rerum sequi totam."
)

HotelRoom.all.each do |room|
  HotelRoomImage.create(hotel_room_id: room.id, image_link: '/images/Hotel1.jpg')
  HotelRoomImage.create(hotel_room_id: room.id, image_link: '/images/Hotel2.jpg')
  HotelRoomImage.create(hotel_room_id: room.id, image_link: '/images/Hotel3.jpg')
  HotelRoomImage.create(hotel_room_id: room.id, image_link: '/images/Hotel4.jpg')
end

Administrator.create(name: 'super_admin', password: 'securedPa$$', email: 'sample_email@mail.ru')