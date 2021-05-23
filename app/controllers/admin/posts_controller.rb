# frozen_string_literal: true

module Admin
  class PostsController < ApplicationController
    include Recordable

    before_action :find_post, only: %i[show update destroy]

    def create
      post = Post.create(name: params[:name], content: params[:content])
      check_validation_results!(post)

      render_success_result(data: post, status: :created)
    end

    def update
      @record.update(name: params[:name], content: params[:content])
      check_validation_results!(@record)

      render_success_result(data: @record)
    end

    private

    def all_records
      Post.all
    end

    def find_post
      @record = Post.find_by(id: params[:id])
      raise(RecordNotFoundError.build) if @record.nil?
    end
  end
end
