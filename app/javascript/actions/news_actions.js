export const RECEIVE_NEWS_LIST = 'RECEIVE_NEWS_LIST';
const receiveNewsList = (json) => ({
  type: RECEIVE_NEWS_LIST,
  payload: json,
});

const fetchNewsList = () => (dispatch) => fetch('/hotel/news')
  .then((response) => response.json())
  .then((json) => dispatch(receiveNewsList(json.data)));

export { fetchNewsList };
