# frozen_string_literal: true

Rails.application.routes.draw do
  namespace(:hotel, default: { format: :json }) do
    get('rooms', to: 'rooms#index')
    get('rooms/:id', to: 'rooms#show')

    get('reviews', to: 'reviews#index')
    post('reviews', to: 'reviews#create')

    get('descriptions/about-hotel', to: 'descriptions#about_hotel')

    get('news', to: 'news#index')
    get('news/:id', to: 'news#show')

    get('services', to: 'services#index')

    post('book-orders', to: 'book_orders#create')

    get('special-offers', to: 'special_offers#index')
    get('special-offers/:id', to: 'special_offers#show')

    get('contacts', to: 'contacts#index')
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
