import {
  REVIEW_WAS_CREATED,
  REVIEW_WAS_NOT_CREATED,
  RECEIVE_REVIEWS,
  CLOSE_MESSAGE,
} from '../actions/reviews_actions';

const initialState = {
  reviews: [],
  showMessage: false,
  clearForm: false,
  errors: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case RECEIVE_REVIEWS:
      return { ...state, reviews: action.payload };
    case REVIEW_WAS_CREATED:
      return { ...state, showMessage: true, errors: [], clearForm: true };
    case REVIEW_WAS_NOT_CREATED:
      return { ...state, errors: action.payload, showMessage: true };
    case CLOSE_MESSAGE:
      return { ...state, errors: [], showMessage: false, clearForm: false };
    default:
      return state;
  }
};
