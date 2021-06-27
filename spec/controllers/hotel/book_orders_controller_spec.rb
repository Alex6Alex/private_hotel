# frozen_string_literal: true

describe Hotel::BookOrdersController, type: :request do
  include ActiveSupport::Testing::TimeHelpers

  # let(:hotel_room) { HotelRoom.create }

  describe '#create' do
    let(:create_path) { '/hotel/book-orders' }
    let(:success_params) do
      {
        room_id: 1,
        date_in: '15.05.2020',
        date_out: '16.05.2020',
        guest_with_place: 2,
        guest_without_place: 1,
        email: 'test@mail.ru',
        phone: '+79781234567',
        time_in: '13:00'
      }
    end

    context 'when params are valid' do
      xit 'creates book order' do
        travel_to(Time.new(2020, 5, 14)) do
          post(create_path, params: success_params)

          expect(JSON.parse(response.body)).to eq(
            {
              'success' => true,
              'data' => {
                'book_order' => {
                  'id' => 1,
                  'room_id' => '1',
                  'date_in' => '15.05.2020',
                  'date_out' => '16.05.2020',
                  'guest_with_place' => '2',
                  'guest_without_place' => '1',
                  'email' => 'test@mail.ru',
                  'phone' => '+79781234567',
                  'time_in' => '13:00'
                }
              }
            }
          )
        end
      end
    end

    context 'when params are invalid' do
      it 'returns error response' do
        post(create_path)

        expect(JSON.parse(response.body)).to eq(
          'error_code' => 'not_found',
          'errors' => ['Requested record was not found'],
          'success' => false
        )
      end
    end
  end
end
