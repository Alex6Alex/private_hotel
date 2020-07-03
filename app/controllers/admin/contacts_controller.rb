# frozen_string_literal: true

module Admin
  class ContactsController < ApplicationController
    def index
      render_success_result(data: Contact.all)
    end

    def create
      contact = Contact.create(
        name:  params[:name],
        phone: params[:phone],
        email: params[:email]
      )
      check_validation_results!(contact)

      render_success_result(data: contact, status: :created)
    end

    def show
      contact = Contact.find_by(id: params[:id])
      raise(RecordNotFoundError.build) if contact.nil?

      render_success_result(data: contact)
    end

    def update
      contact = Contact.find_by(id: params[:id])
      raise(RecordNotFoundError.build) if contact.nil?

      contact.update(
        name:  params[:name],
        phone: params[:phone],
        email: params[:email]
      )
      check_validation_results!(contact)

      render_success_result(data: contact)
    end

    def destroy
      contact = Contact.find_by(id: params[:id])
      raise(RecordNotFoundError.build) if contact.nil?

      contact.delete
      render_success_result
    end
  end
end
