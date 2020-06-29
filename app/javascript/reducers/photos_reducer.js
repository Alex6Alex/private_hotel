import {
  RECEIVE_PHOTOS,
} from '../actions/photos_actions';

const initialState = {
  photos: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case RECEIVE_PHOTOS:
      return { ...state, photos: action.payload };
    default:
      return state;
  }
};
