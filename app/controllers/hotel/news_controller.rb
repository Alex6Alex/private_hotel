# frozen_string_literal: true

module Hotel
  class NewsController < ApplicationController
    def index
      render_success_result(news: News.all)
    end
  end
end
