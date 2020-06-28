export const RECEIVE_REVIEWS = 'RECEIVE_REVIEWS';
const receiveReviews = (json) => ({
  type: RECEIVE_REVIEWS,
  payload: json,
});

export const REVIEW_WAS_CREATED = 'REVIEW_WAS_CREATED';
const reviewWasCreated = () => ({
  type: REVIEW_WAS_CREATED,
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
    .then(() => dispatch(reviewWasCreated()));
};

const fetchReviews = () => (dispatch) => fetch('/hotel/reviews')
  .then((response) => response.json())
  .then((json) => dispatch(receiveReviews(json.data)));

export { fetchReviews, sendReview };
