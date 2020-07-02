import {
  REVIEW_WAS_CREATED,
  REVIEW_WAS_NOT_CREATED,
  RECEIVE_REVIEWS,
} from '../actions/reviews_actions';

const initialState = {
  reviews: [],
  showMessage: false,
  errors: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case RECEIVE_REVIEWS:
      return { ...state, reviews: action.payload };
    case REVIEW_WAS_CREATED:
      return { ...state, showMessage: true, errors: [] };
    case REVIEW_WAS_NOT_CREATED:
      return { ...state, errors: action.payload, showMessage: true };
    default:
      return state;
  }
};
