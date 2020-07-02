# frozen_string_literal: true

module Hotel
  class SpecialOffersController < ApplicationController
    def index
      render_success_result(data: SpecialOffer.all)
    end

    def show
      special_offer = SpecialOffer.find_by(id: params[:id])
      raise(RecordNotFoundError.build) if special_offer.nil?

      render_success_result(data: special_offer)
    end
  end
end
