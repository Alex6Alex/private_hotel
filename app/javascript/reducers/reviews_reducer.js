import {
  REVIEW_WAS_CREATED,
  RECEIVE_REVIEWS,
} from '../actions/reviews_actions';

const initialState = {
  reviews: [],
  reviewWasCreated: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case RECEIVE_REVIEWS:
      return { ...state, reviews: action.payload.reviews };
    case REVIEW_WAS_CREATED:
      return { ...state, reviewWasCreated: true };
    default:
      return state;
  }
};
