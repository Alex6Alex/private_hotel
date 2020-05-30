# frozen_string_literal: true

module Admin
  class ServicesController < ApplicationController
    def index
      render_success_result(Service.all)
    end

    def create
      # raise('Required fields does not set') if params[:name].blank? || params[:content].blank?
      #
      # post = Post.create(name: params[:name], image_link: '/images/Hotel1.jpg', content: params[:content])
      # render_success_result({ post: post }, :created)
    end

    def show
      # post = Post.find_by(id: params[:id])
      # raise('Incorrect id') if post.nil?
      #
      # render_success_result(post: post)
    end

    def update
      # post = Post.find_by(id: params[:id])
      # raise('Incorrect id') if post.nil?
      #
      # post.update(name: params[:name], content: params[:content])
      # render_success_result(update: true)
    end

    def destroy
      # post = Post.find_by(id: params[:id])
      # raise('incorrect id') if post.nil?
      #
      # post.delete
      # render_success_result({})
    end
  end
end
