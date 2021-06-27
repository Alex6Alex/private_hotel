# frozen_string_literal: true

module Admin
  class ContactsController < ApplicationController
    include Recordable

    before_action :find_contact, only: %i[show update destroy]

    def create
      contact = Contact.create(
        name:  params[:name], phone: params[:phone], email: params[:email]
      )
      check_validation_results!(contact)

      render_success_result(data: contact, status: :created)
    end

    def update
      @record.update(
        name:  params[:name], phone: params[:phone], email: params[:email]
      )
      check_validation_results!(@record)

      render_success_result(data: @record)
    end

    private

    def all_records
      Contact.all
    end

    def find_contact
      @record = Contact.find_by(id: params[:id])
      raise(RecordNotFoundError.build) if @record.nil?
    end
  end
end
