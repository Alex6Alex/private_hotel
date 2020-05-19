# frozen_string_literal: true

module Admin
  class AuthenticationController < ApplicationController
    def profile
      auth_header = request.headers['Authorization']
      raise(Admin::RequestHeaderNotSetError.build) if auth_header.blank?

      begin
        token_payload = JWT.decode(auth_header.split(' ').last, ENV['JWT_TOKEN'])
      rescue JWT::DecodeError
        raise(Admin::WrongLoginCredentialsError.build)
      end

      admin = Administrator.find_by(id: token_payload.first['admin_id'])
      raise(Admin::WrongLoginCredentialsError.build) if admin.nil?

      render_success_result(admin: { id: admin.id, name: admin.name })
    end

    def login
      admin = Administrator.find_by(name: params[:name])
      if admin.nil? || !admin.authenticate(params[:password])
        raise(Admin::WrongLoginCredentialsError.build)
      end

      render_success_result(
        admin: { id: admin.id, name: admin.name },
        token: JWT.encode({ admin_id: admin.id }, ENV['JWT_TOKEN'])
      )
    end
  end
end
