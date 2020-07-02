export const RECEIVE_REVIEWS = 'RECEIVE_REVIEWS';
const receiveReviews = (json) => ({
  type: RECEIVE_REVIEWS,
  payload: json,
});

export const REVIEW_WAS_CREATED = 'REVIEW_WAS_CREATED';
const reviewWasCreated = () => ({
  type: REVIEW_WAS_CREATED,
});

export const REVIEW_WAS_NOT_CREATED = 'REVIEW_WAS_NOT_CREATED';
const reviewWasNotCreated = (json) => ({
  type: REVIEW_WAS_NOT_CREATED,
  payload: json
});

export const CLOSE_MESSAGE = 'CLOSE_MESSAGE';
const closeMessage = () => ({
  type: CLOSE_MESSAGE
});

const sendReview = (data) => (dispatch) => {
  const headers = new Headers(
    { 'Content-Type': 'application/json', 'X-CSRF-TOKEN': data.csrf },
  );
  const body = JSON.stringify(
    { guest_name: data.guest_name, email: data.email, content: data.content },
  );

  fetch('/hotel/reviews', { method: 'POST', headers, body })
    .then((response) => response.json())
    .then((json) => {
      dispatch(json.success ? reviewWasCreated() : reviewWasNotCreated(json.errors));
    })
};

const fetchReviews = () => (dispatch) => fetch('/hotel/reviews')
  .then((response) => response.json())
  .then((json) => dispatch(receiveReviews(json.data)));

const hideMessage = () => (dispatch) => dispatch(closeMessage());

export { fetchReviews, sendReview, hideMessage };
