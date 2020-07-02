export const BOOK_ORDER_WAS_CREATED = 'BOOK_ORDER_WAS_CREATED';
const bookOrderWasCreated = () => ({
  type: BOOK_ORDER_WAS_CREATED,
});

export const BOOK_ORDER_WAS_NOT_CREATED = 'BOOK_ORDER_WAS_NOT_CREATED';
const bookOrderWasNotCreated = (json) => ({
  type: BOOK_ORDER_WAS_NOT_CREATED,
  payload: json
});

const sendBookOrder = (data) => (dispatch) => {
  const headers = new Headers(
    { 'Content-Type': 'application/json', 'X-CSRF-TOKEN': data.csrf },
  );
  const body = JSON.stringify({
    hotel_room_id: data.roomId,
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
    .then((json) => {
      dispatch(json.success ? bookOrderWasCreated() : bookOrderWasNotCreated(json.errors))
    });
};

export { sendBookOrder };
