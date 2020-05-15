# frozen_string_literal: true

class News
  def self.all
    @news
  end

  def self.find_by(id:)
    @news.find { |n| n[:id] == id.to_i }
  end

  @news = [
    {
      id: 1,
      name: 'Новость1',
      content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.\nAperiam asperiores cum eligendi explicabo harum impedit incidunt ipsa, maiores minus, molestiae nam odit porro provident, quaerat quam quas rerum sequi totam.",
      image_link: '/images/Hotel4.jpg'
    },
    {
      id: 2,
      name: 'Новость2',
      content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.\nAperiam asperiores cum eligendi explicabo harum impedit incidunt ipsa, maiores minus, molestiae nam odit porro provident, quaerat quam quas rerum sequi totam.",
      image_link: '/images/Hotel4.jpg'
    },
    {
      id: 3,
      name: 'Новость3',
      content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.\nAperiam asperiores cum eligendi explicabo harum impedit incidunt ipsa, maiores minus, molestiae nam odit porro provident, quaerat quam quas rerum sequi totam.",
      image_link: '/images/Hotel4.jpg'
    }
  ]
end
