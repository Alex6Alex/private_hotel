# frozen_string_literal: true

module Hotel
  class SpecialOffersController < ApplicationController
    def index
      render_success_result(special_offers: SpecialOffer.all)
    end

    def show
      render_success_result(special_offer: SpecialOffer.find_by(id: params[:id]))
    end
  end
end
