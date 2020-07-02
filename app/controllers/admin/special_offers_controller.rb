# frozen_string_literal: true

module Admin
  class SpecialOffersController < ApplicationController
    def index
      render_success_result(data: SpecialOffer.all)
    end

    def create
      special_offer = SpecialOffer.create(
        name:    params[:name],
        content: params[:content]
      )
      check_validation_results!(special_offer)

      render_success_result(data: special_offer, status: :created)
    end

    def show
      special_offer = SpecialOffer.find_by(id: params[:id])
      raise(RecordNotFoundError.build) if special_offer.nil?

      render_success_result(data: special_offer)
    end

    def update
      special_offer = SpecialOffer.find_by(id: params[:id])
      raise(RecordNotFoundError.build) if special_offer.nil?


      special_offer.update(name: params[:name], content: params[:content])
      check_validation_results!(special_offer)

      render_success_result(data: special_offer)
    end

    def destroy
      special_offer = SpecialOffer.find_by(id: params[:id])
      raise(RecordNotFoundError.build) if special_offer.nil?

      special_offer.delete
      render_success_result
    end
  end
end
