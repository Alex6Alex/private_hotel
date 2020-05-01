# frozen_string_literal: true

class Review
  def self.all
    @reviews
  end

  @reviews = [
    {
      id: 1,
      user_name: 'Иванов А.П.',
      content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.\nAperiam asperiores cum eligendi explicabo harum impedit incidunt ipsa, maiores minus, molestiae nam odit porro provident, quaerat quam quas rerum sequi totam.",
      created_at: '12.03.2020'
    },
    {
      id: 2,
      user_name: 'Послетитель',
      content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.\nAperiam asperiores cum eligendi explicabo harum impedit incidunt ipsa, maiores minus, molestiae nam odit porro provident, quaerat quam quas rerum sequi totam.",
      created_at: '15.04.2020'
    },
    {
      id: 3,
      user_name: 'Посетитель_2',
      content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.\nAperiam asperiores cum eligendi explicabo harum impedit incidunt ipsa, maiores minus, molestiae nam odit porro provident, quaerat quam quas rerum sequi totam.",
      created_at: '25.04.2020'
    }
  ]
end
