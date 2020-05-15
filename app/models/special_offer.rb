# frozen_string_literal: true

class SpecialOffer
  def self.all
    @special_offers
  end

  def self.find_by(id:)
    @special_offers.find { |offer| offer[:id] == id.to_i }
  end

  @special_offers = [
    {
      id: 1,
      name: 'Спец предложение 1',
      image_link: '/images/Hotel1.jpg',
      content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.\nAperiam asperiores cum eligendi explicabo harum impedit incidunt ipsa, maiores minus, molestiae nam odit porro provident, quaerat quam quas rerum sequi totam."
    },
    {
      id: 2,
      name: 'Спец предложение 2',
      image_link: '/images/Hotel1.jpg',
      content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.\nAperiam asperiores cum eligendi explicabo harum impedit incidunt ipsa, maiores minus, molestiae nam odit porro provident, quaerat quam quas rerum sequi totam."
    },
    {
      id: 3,
      name: 'Спец предложение 3',
      image_link: '/images/Hotel1.jpg',
      content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.\nAperiam asperiores cum eligendi explicabo harum impedit incidunt ipsa, maiores minus, molestiae nam odit porro provident, quaerat quam quas rerum sequi totam."
    },
    {
      id: 4,
      name: 'Спец предложение 4',
      image_link: '/images/Hotel1.jpg',
      content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.\nAperiam asperiores cum eligendi explicabo harum impedit incidunt ipsa, maiores minus, molestiae nam odit porro provident, quaerat quam quas rerum sequi totam."
    },
    {
      id: 5,
      name: 'Спец предложение 5',
      image_link: '/images/Hotel1.jpg',
      content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.\nAperiam asperiores cum eligendi explicabo harum impedit incidunt ipsa, maiores minus, molestiae nam odit porro provident, quaerat quam quas rerum sequi totam."
    },
    {
      id: 6,
      name: 'Спец предложение 6',
      image_link: '/images/Hotel1.jpg',
      content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.\nAperiam asperiores cum eligendi explicabo harum impedit incidunt ipsa, maiores minus, molestiae nam odit porro provident, quaerat quam quas rerum sequi totam."
    }
  ]
end
