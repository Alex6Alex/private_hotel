import {
  RECEIVE_PHOTOS,
  SEND_PHOTO_SUCCESS,
} from '../../actions/admin/hotel_photos_actions';

const initialState = {
  hotelPhotos: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case RECEIVE_PHOTOS:
      return { ...state, hotelPhotos: action.payload };
    case SEND_PHOTO_SUCCESS:
      return  { ...state };
    default:
      return state;
  }
};
