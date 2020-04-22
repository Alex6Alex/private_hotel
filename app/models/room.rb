class Room
  def self.all
    @rooms
  end

  def self.find_by(id:)
    @rooms.find { |room| room[:id] == id.to_i }
  end

  @rooms = [
    {
      id: 1,
      name: 'Стандарт двухместный',
      image_links: ['images/Hotel1.jpg', 'images/Hotel2.jpg', 'images/Hotel3.jpg', 'images/Hotel4.jpg'],
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.\nAperiam asperiores cum eligendi explicabo harum impedit incidunt ipsa, maiores minus, molestiae nam odit porro provident, quaerat quam quas rerum sequi totam.",
      day_price: 1000,
      currency: 'RUB',
      person_capacity: 2,
      room_area: 15,
      count_of_rooms: 4
    },
    {
      id: 2,
      name: 'Стандарт трехместный',
      image_links: ['images/Hotel1.jpg', 'images/Hotel2.jpg', 'images/Hotel3.jpg', 'images/Hotel4.jpg'],
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.\nAperiam asperiores cum eligendi explicabo harum impedit incidunt ipsa, maiores minus, molestiae nam odit porro provident, quaerat quam quas rerum sequi totam.",
      day_price: 1500,
      currency: 'RUB',
      person_capacity: 3,
      room_area: 15,
      count_of_rooms: 4
    },
    {
      id: 3,
      name: 'Люкс двухместный',
      image_links: ['images/Hotel1.jpg', 'images/Hotel2.jpg', 'images/Hotel3.jpg', 'images/Hotel4.jpg'],
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.\nAperiam asperiores cum eligendi explicabo harum impedit incidunt ipsa, maiores minus, molestiae nam odit porro provident, quaerat quam quas rerum sequi totam.",
      day_price: 2000,
      currency: 'RUB',
      person_capacity: 2,
      room_area: 18,
      count_of_rooms: 4
    },
    {
      id: 4,
      name: 'Люкс трехместный',
      image_links: ['images/Hotel1.jpg', 'images/Hotel2.jpg', 'images/Hotel3.jpg', 'images/Hotel4.jpg'],
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.\nAperiam asperiores cum eligendi explicabo harum impedit incidunt ipsa, maiores minus, molestiae nam odit porro provident, quaerat quam quas rerum sequi totam.",
      day_price: 2500,
      currency: 'RUB',
      person_capacity: 3,
      room_area: 18,
      count_of_rooms: 4
    }
  ]
end
