# frozen_string_literal: true

class BookOrderMailer < ApplicationMailer
  def new_book_order_email
    @book_order = params[:book_order]

    mail(to: ENV['EMAIL_USER_NAME'], subject: 'New Book Order')
  end
end
