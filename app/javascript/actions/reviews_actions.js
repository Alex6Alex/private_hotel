export const RECEIVE_REVIEWS = 'RECEIVE_REVIEWS';
const receiveReviews = (json) => ({
  type: RECEIVE_REVIEWS,
  payload: json,
});

const fetchReviews = () => (dispatch) => fetch('/hotel/reviews')
  .then((response) => response.json())
  .then((json) => dispatch(receiveReviews(json.data)));

export { fetchReviews };
