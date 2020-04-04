module V1
  class ThingsController < ApplicationController
    def index
      render(
        json: {
          things: [
            {
              name: 'some_thing',
              guid: '123456'
            }
          ]
        }
      )
    end
  end
end