# frozen_string_literal: true

module Hotel
  class NewsController < ApplicationController
    def index
      render_success_result(data: Post.all)
    end

    def show
      post = Post.find_by(id: params[:id])
      raise(RecordNotFoundError.build) if post.nil?

      render_success_result(data: post)
    end
  end
end
