export const RECEIVE_NEW_BOOK_ORDER = 'RECEIVE_NEW_BOOK_ORDER';
const receiveNewBookOrder = (json) => ({
  type: RECEIVE_NEW_BOOK_ORDER,
  payload: json,
});

const sendBookOrder = (data) => (dispatch) => {
  const headers = new Headers(
    { 'Content-Type': 'application/json', 'X-CSRF-TOKEN': data.csrf },
  );
  const body = JSON.stringify({},
    // { guest_name: data.guest_name, email: data.email, content: data.content }
  );

  fetch('/hotel/book-orders', { method: 'POST', headers, body })
    .then((response) => response.json())
    .then((json) => dispatch(receiveNewBookOrder(json.data)));
};

export { sendBookOrder };
