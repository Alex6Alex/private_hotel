import {
  RECEIVE_ARTICLE,
} from '../actions/articles_actions';

const initialState = {
  article: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case RECEIVE_ARTICLE:
      return { ...state, article: action.payload };
    default:
      return state;
  }
};
