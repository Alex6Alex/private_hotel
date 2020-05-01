import {
  RECEIVE_REVIEWS,
} from '../actions/reviews_actions';

const initialState = {
  reviews: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case RECEIVE_REVIEWS:
      return { ...state, reviews: action.payload.reviews };
    default:
      return state;
  }
};
