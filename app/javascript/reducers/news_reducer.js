import {
  RECEIVE_NEWS_LIST,
  RECEIVE_NEWS,
} from '../actions/news_actions';

const initialState = {
  newsList: [],
  selectedNews: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case RECEIVE_NEWS_LIST:
      return { ...state, newsList: action.payload.news_list };
    case RECEIVE_NEWS:
      return { ...state, selectedNews: action.payload.news };
    default:
      return state;
  }
};
