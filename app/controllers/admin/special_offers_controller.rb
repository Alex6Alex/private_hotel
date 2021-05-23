# frozen_string_literal: true

module Admin
  class SpecialOffersController < ApplicationController
    include Recordable

    before_action :find_special_offer, only: %i[show update destroy]

    def create
      special_offer = SpecialOffer.create(
        name:    params[:name],
        content: params[:content]
      )
      check_validation_results!(special_offer)

      render_success_result(data: special_offer, status: :created)
    end

    def update
      @record.update(name: params[:name], content: params[:content])
      check_validation_results!(@record)

      render_success_result(data: @record)
    end

    private

    def all_records
      SpecialOffer.all
    end

    def find_special_offer
      @record = SpecialOffer.find_by(id: params[:id])
      raise(RecordNotFoundError.build) if @record.nil?
    end
  end
end
