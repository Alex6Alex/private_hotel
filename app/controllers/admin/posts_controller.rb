# frozen_string_literal: true

module Admin
  class PostsController < ApplicationController
    def index
      render_success_result(Post.all)
    end

    def create
      raise('Required fields does not set') if params[:name].blank? || params[:content].blank?

      post = Post.create(name: params[:name], image_link: '/images/Hotel1.jpg', content: params[:content])
      render_success_result(post, :created)
    end

    def show
      post = Post.find_by(id: params[:id])
      raise('Incorrect id') if post.nil?

      render_success_result(post)
    end

    def update
      post = Post.find_by(id: params[:id])
      raise('Incorrect id') if post.nil?

      post.update(name: params[:name], content: params[:content])
      render_success_result(post)
    end

    def destroy
      post = Post.find_by(id: params[:id])
      raise('incorrect id') if post.nil?

      post.delete
      render_success_result({})
    end
  end
end
