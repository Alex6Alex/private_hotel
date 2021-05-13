require 'rails_helper'

describe Admin::PostsController, type: :controller do
  let!(:post) { Post.create(name: 'test post', content: 'post content') }

  describe '#index' do
    context 'when posts exist' do
      it 'returns array of posts' do
        get(:index)

        expect(JSON.parse(response.body)).to eq(
          'data' => [post.as_json], 'success' => true
        )
      end
    end
  end

  describe '#show' do
    context 'when record exists' do
      it 'returns this record' do
        get(:show, params: { id: post.id })

        expect(JSON.parse(response.body)).to eq(
          'data' => post.as_json, 'success' => true
        )
      end
    end

    context 'when record does not exist' do
      it 'returns error' do
        get(:show, params: { id: -1 })

        expect(JSON.parse(response.body)).to eq(
          'error_code' => 'not_found', 'success' => false, 'errors' => []
        )
      end
    end
  end

  describe '#destroy' do
    context 'when record was found' do
      it 'removes this record' do
        delete(:destroy, params: { id: post.id })

        expect(JSON.parse(response.body)).to eq(
          'success' => true, 'data' => nil
        )
      end
    end

    context 'when record was not found' do
      it 'returns error' do
        delete(:destroy, params: { id: -1 })

        expect(JSON.parse(response.body)).to eq(
          'error_code' => 'not_found', 'success' => false, 'errors' => []
        )
      end
    end
  end
end
