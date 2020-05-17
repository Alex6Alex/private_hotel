# frozen_string_literal: true

module Hotel
  class NewsController < ApplicationController
    def index
      render_success_result(news_list: Post.all)
    end

    def show
      render_success_result(news: Post.find_by(id: params[:id]))
    end
  end
end
