export const RECEIVE_ARTICLE = 'RECEIVE_ARTICLE';
const receiveArticle = (json) => ({
  type: RECEIVE_ARTICLE,
  payload: json,
});

const fetchArticle = (url, id) => (dispatch) => fetch(`${url}/${id}`)
  .then((response) => response.json())
  .then((json) => dispatch(receiveArticle(json.data)));

export { fetchArticle };
