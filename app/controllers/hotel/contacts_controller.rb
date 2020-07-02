# frozen_string_literal: true

module Hotel
  class ContactsController < ApplicationController
    def index
      render_success_result(data: Contact.all)
    end
  end
end
