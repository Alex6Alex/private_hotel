import {
  RECEIVE_PHOTOS,
  SEND_PHOTO_SUCCESS,
  REMOVE_PHOTO,
} from '../../actions/admin/hotel_photos_actions';

const initialState = {
  hotelPhotos: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case RECEIVE_PHOTOS:
      return { ...state, hotelPhotos: action.payload };
    case SEND_PHOTO_SUCCESS:
      return  { ...state, hotelPhotos: [...state.hotelPhotos, action.payload] };
    case REMOVE_PHOTO:
      return { ...state, hotelPhotos: state.hotelPhotos.filter(photo => photo.id !== action.payload.id) };
    default:
      return state;
  }
};
