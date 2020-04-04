Rails.application.routes.draw do
  namespace(:v1, default: { format: 'json' }) do
    get('things', to: 'things#index')
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
