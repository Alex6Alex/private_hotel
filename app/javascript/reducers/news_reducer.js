import {
  RECEIVE_NEWS_LIST,
} from '../actions/news_actions';

const initialState = {
  newsList: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case RECEIVE_NEWS_LIST:
      return { ...state, newsList: action.payload };
    default:
      return state;
  }
};
