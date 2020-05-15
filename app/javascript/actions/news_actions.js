export const RECEIVE_NEWS_LIST = 'RECEIVE_NEWS_LIST';
const receiveNewsList = (json) => ({
  type: RECEIVE_NEWS_LIST,
  payload: json,
});

export const RECEIVE_NEWS = 'RECEIVE_NEWS';
const receiveNews = (json) => ({
  type: RECEIVE_NEWS,
  payload: json,
});

const fetchNewsList = () => (dispatch) => fetch('/hotel/news')
  .then((response) => response.json())
  .then((json) => dispatch(receiveNewsList(json.data)));

const fetchNews = (id) => (dispatch) => fetch(`/hotel/news/${id}`)
  .then((response) => response.json())
  .then((json) => dispatch(receiveNews(json.data)));

export { fetchNewsList, fetchNews };
