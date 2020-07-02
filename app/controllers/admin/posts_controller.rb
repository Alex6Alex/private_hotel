# frozen_string_literal: true

module Admin
  class PostsController < ApplicationController
    def index
      render_success_result(data: Post.all)
    end

    def create
      post = Post.create(
        name:    params[:name],
        content: params[:content]
      )
      check_validation_results!(post)

      render_success_result(data: post, status: :created)
    end

    def show
      post = Post.find_by(id: params[:id])
      raise(RecordNotFoundError.build) if post.nil?

      render_success_result(data: post)
    end

    def update
      post = Post.find_by(id: params[:id])
      raise(RecordNotFoundError.build) if post.nil?

      post.update(
        name:    params[:name],
        content: params[:content]
      )
      check_validation_results!(post)

      render_success_result(data: post)
    end

    def destroy
      post = Post.find_by(id: params[:id])
      raise(RecordNotFoundError.build) if post.nil?

      post.delete
      render_success_result
    end
  end
end
