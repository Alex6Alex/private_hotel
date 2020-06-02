# frozen_string_literal: true

module Admin
  class SpecialOffersController < ApplicationController
    def index
      render_success_result(SpecialOffer.all)
    end

    def create
      raise('Required fields does not set') if params[:name].blank?

      special_offer = SpecialOffer.create(name: params[:name], image_link: '/images/Hotel1.jpg', content: params[:content])
      render_success_result(special_offer, :created)
    end

    def show
      special_offer = SpecialOffer.find_by(id: params[:id])
      raise('Incorrect id') if special_offer.nil?

      render_success_result(special_offer)
    end

    def update
      special_offer = SpecialOffer.find_by(id: params[:id])
      raise('Incorrect id') if special_offer.nil?

      special_offer.update(name: params[:name], content: params[:content])
      render_success_result(special_offer)
    end

    def destroy
      special_offer = SpecialOffer.find_by(id: params[:id])
      raise('incorrect id') if special_offer.nil?

      special_offer.delete
      render_success_result({})
    end
  end
end
