# frozen_string_literal: true

Rails.application.routes.draw do
  namespace(:hotel, default: { format: :json }) do
    get('rooms', to: 'rooms#index')
    get('rooms/:id', to: 'rooms#show')

    get('reviews', to: 'reviews#index')
    post('reviews', to: 'reviews#create')

    get('descriptions/about-hotel', to: 'descriptions#about_hotel')

    get('news', to: 'news#index')

    get('services', to: 'services#index')
  end

  namespace(:v1, default: { format: 'json' }) do
    get('contacts', to: 'things#contacts')
  end

  get(
    '*page',
    to: 'home_page#index',
    constraints: lambda do |req|
      # non-Ajax and HTML mime-type
      !req.xhr? && req.format.html?
    end
  )

  root('home_page#index')
end
