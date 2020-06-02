export const RECEIVE_REVIEWS = 'RECEIVE_REVIEWS';
const receiveItems = (json) => ({
  type: RECEIVE_REVIEWS,
  payload: json,
});

export const APPROVE_REVIEW_SUCCESS = 'APPROVE_REVIEW_SUCCESS';
const approveReviewSuccess = (id) => ({
  type: APPROVE_REVIEW_SUCCESS,
  payload: { id }
});

export const REMOVE_REVIEW = 'REMOVE_REVIEW';
const removeItem = (id) => ({
  type: REMOVE_REVIEW,
  payload: { id }
});

const fetchReviews = (url) => (dispatch) => fetch(url)
  .then((response) => response.json())
  .then((json) => dispatch(receiveItems(json.data)));

const approveReview = (url, csrf, data) => (dispatch) => {
  const headers = new Headers(
    { 'Content-Type': 'application/json', 'X-CSRF-TOKEN': csrf }
  );
  const body = JSON.stringify(data);
  const apiUrl = `${url}/${data.id}/approve`;

  fetch(apiUrl, { method: 'PUT', headers, body })
    .then((response) => response.json())
    .then((json) => {
      if (json.success) dispatch(approveReviewSuccess(data.id))
    });
};

const deleteReview = (url, csrf, data) => (dispatch) => {
  const headers = new Headers(
    { 'Content-Type': 'application/json', 'X-CSRF-TOKEN': csrf },
  );
  fetch(`${url}/${data.id}`, { method: 'DELETE', headers })
    .then((response) => response.json())
    .then((json) => {
      if (json.success) dispatch(removeItem(data.id))
    });
};

export { fetchReviews, approveReview, deleteReview };
