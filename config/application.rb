# frozen_string_literal: true

require_relative 'boot'

require 'rails/all'

# Require the gems listed in Gemfile, including any gems
# you've limited to :test, :development, or :production.
Bundler.require(*Rails.groups)

module Hotel
  class Application < Rails::Application
    # Initialize configuration defaults for originally generated Rails version.
    config.load_defaults 6.0

    config.before_configuration do
      env_file = File.join(Rails.root, '.env.yml')
      break unless File.exist?(env_file)

      YAML.safe_load(File.open(env_file)).each do |key, value|
        ENV[key.to_s] = value.to_s
      end
    end
  end
end
