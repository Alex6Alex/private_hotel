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
      let entities = state.entities.map((review) => {
        if (review.id === action.payload.id) review.approved = true;
        return review;
      });
      return { ...state, entities };
    case REMOVE_REVIEW:
      return { ...state, entities: state.entities.filter(entity => entity.id !== action.payload.id) };
    default:
      return state;
  }
};
