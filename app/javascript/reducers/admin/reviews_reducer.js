import {
  RECEIVE_REVIEWS,
  APPROVE_REVIEW_SUCCESS,
  REMOVE_REVIEW,
} from '../../actions/admin/reviews_actions';

const initialState = {
  entities: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case RECEIVE_REVIEWS:
      return { ...state, entities: action.payload };
    case APPROVE_REVIEW_SUCCESS:
      // let review = state.entities.find(review => review.id === action.payload.id);
      // if (review) review.approved = true;
      return { ...state };
    case REMOVE_REVIEW:
      return { ...state, entities: state.entities.filter(entity => entity.id !== action.payload.id) };
    default:
      return state;
  }
};
