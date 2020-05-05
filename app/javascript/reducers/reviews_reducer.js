import {
  RECEIVE_NEW_REVIEW,
  RECEIVE_REVIEWS,
} from '../actions/reviews_actions';

const initialState = {
  reviews: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case RECEIVE_REVIEWS:
      return { ...state, reviews: action.payload.reviews };
    case RECEIVE_NEW_REVIEW:
      const reviews = state.reviews;
      return { ...state, reviews: [action.payload.review, ...reviews] };
    default:
      return state;
  }
};
