import {
  RECEIVE_NEWS_LIST,
} from '../actions/news_actions';

const initialState = {
  news: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case RECEIVE_NEWS_LIST:
      return { ...state, news: action.payload.news };
    default:
      return state;
  }
};
