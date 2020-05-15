export const RECEIVE_NEW_BOOK_ORDER = 'RECEIVE_NEW_BOOK_ORDER';
const receiveNewBookOrder = (json) => ({
  type: RECEIVE_NEW_BOOK_ORDER,
  payload: json,
});

const sendBookOrder = (data) => (dispatch) => {
  const headers = new Headers(
    { 'Content-Type': 'application/json', 'X-CSRF-TOKEN': data.csrf },
  );
  const body = JSON.stringify({
    room_id: data.roomId,
    date_in: data.dateIn,
    date_out: data.dateOut,
    guests_with_place: data.guestsWithPlace,
    guests_without_place: data.guestsWithoutPlace,
    email: data.email,
    phone: data.phone,
    time_in: data.timeIn,
  });

  fetch('/hotel/book-orders', { method: 'POST', headers, body })
    .then((response) => response.json())
    .then((json) => dispatch(receiveNewBookOrder(json.data)));
};

export { sendBookOrder };
