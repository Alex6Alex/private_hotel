# frozen_string_literal: true

Rails.application.routes.draw do
  namespace(:hotel, default: { format: :json }) do
    resources(:rooms, only: %i[index show])
    resources(:reviews, only: %i[index create])

    get('descriptions/about-hotel', to: 'descriptions#about_hotel')

    get('news', to: 'news#index')
    get('news/:id', to: 'news#show')

    get('services', to: 'services#index')

    post('book-orders', to: 'book_orders#create')

    get('special-offers', to: 'special_offers#index')
    get('special-offers/:id', to: 'special_offers#show')

    get('contacts', to: 'contacts#index')
  end

  namespace(:admin, default: { format: :json }) do
    get('authentication/profile', to: 'authentication#profile')
    post('authentication/login', to: 'authentication#login')

    resources(:book_orders, only: %i[index])
    resources(:posts)
    resources(:hotel_rooms)
    resources(:services)
  end

  scope('/admin') do
    get('*page', to: 'admin#index')
    get('/', to: 'admin#index')
  end

  get('*page', to: 'client#index', constraints: -> (req) { !req.xhr? && req.format.html? })

  root('client#index')
end
