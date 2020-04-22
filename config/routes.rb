Rails.application.routes.draw do
  namespace(:hotel, default: { format: :json }) do
    get('rooms', to: 'rooms#index')
    get('rooms/:id', to: 'rooms#show')
  end

  namespace(:v1, default: { format: 'json' }) do
    get('contacts', to: 'things#contacts')
  end

  get(
    '*page',
    to: 'home_page#index',
    constraints: ->(req) do
      # non-Ajax and HTML mime-type
      !req.xhr? && req.format.html?
    end
  )

  root('home_page#index')
end
