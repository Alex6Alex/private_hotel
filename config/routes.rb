# frozen_string_literal: true

Rails.application.routes.draw do
  namespace(:hotel, default: { format: :json }) do
    resources(:rooms, only: %i[index show])
    resources(:reviews, only: %i[index create])

    get('conference-room', to: 'conference_rooms#index')

    get('descriptions/about-hotel', to: 'descriptions#about_hotel')

    get('news', to: 'news#index')
    get('news/:id', to: 'news#show')

    get('services', to: 'services#index')

    post('book-orders', to: 'book_orders#create')

    get('special-offers', to: 'special_offers#index')
    get('special-offers/:id', to: 'special_offers#show')

    get('contacts', to: 'contacts#index')

    get('photos', to: 'photos#index')
  end

  namespace(:admin, default: { format: :json }) do
    get('authentication/profile', to: 'authentication#profile')
    post('authentication/login', to: 'authentication#login')

    resources(:book_orders, only: %i[index])
    resources(:posts)
    resources(:hotel_rooms)
    resources(:conference_rooms)
    resources(:services)
    resources(:special_offers)
    resources(:description_texts)
    resources(:contacts)

    get('hotel-photos', to: 'hotel_photos#index')
    post('hotel-photos', to: 'hotel_photos#create')
    delete('hotel-photos/:id', to: 'hotel_photos#destroy')

    get('hotel-room-images', to: 'hotel_room_images#index')
    post('hotel-room-images', to: 'hotel_room_images#create')
    delete('hotel-room-images/:id', to: 'hotel_room_images#destroy')

    get('conference-room-images', to: 'conference_room_images#index')
    post('conference-room-images', to: 'conference_room_images#create')
    delete('conference-room-images/:id', to: 'conference_room_images#destroy')

    resources(:reviews, only: %i[index destroy])
    put('reviews/:id/approve', to: 'reviews#approve')

    resources(:book_orders, only: %i[index destroy])
    put('book_orders/:id/approve', to: 'book_orders#approve')
  end

  scope('/admin') do
    get('*page', to: 'admin#index')
    get('/', to: 'admin#index')
  end

  get('*page', to: 'client#index', constraints: ->(req) { !req.xhr? && req.format.html? })

  root('client#index')
end
