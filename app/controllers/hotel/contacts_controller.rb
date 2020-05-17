# frozen_string_literal: true

module Hotel
  class ContactsController < ApplicationController
    def index
      contacts = Contact.all.as_json
      contacts[1][:priority] = true
      render_success_result(contacts: contacts)
    end
  end
end
