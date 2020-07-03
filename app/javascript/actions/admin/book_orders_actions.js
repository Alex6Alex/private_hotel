export const RECEIVE_BOOK_ORDERS = 'RECEIVE_BOOK_ORDERS';
const receiveBookOrders = (json) => ({
  type: RECEIVE_BOOK_ORDERS,
  payload: json,
});

export const APPROVE_BOOK_ORDER_SUCCESS = 'APPROVE_BOOK_ORDER_SUCCESS';
const approveBookOrderSuccess = (id) => ({
  type: APPROVE_BOOK_ORDER_SUCCESS,
  payload: { id }
});

export const REMOVE_BOOK_ORDER = 'REMOVE_BOOK_ORDER';
const removeBookOrder = (id) => ({
  type: REMOVE_BOOK_ORDER,
  payload: { id }
});

const fetchBookOrders = (url) => (dispatch) => fetch(url)
  .then((response) => response.json())
  .then((json) => dispatch(receiveBookOrders(json.data)));

const approveBookOrder = (url, csrf, data) => (dispatch) => {
  const headers = new Headers(
    { 'Content-Type': 'application/json', 'X-CSRF-TOKEN': csrf }
  );
  const body = JSON.stringify(data);
  const apiUrl = `${url}/${data.id}/approve`;

  fetch(apiUrl, { method: 'PUT', headers, body })
    .then((response) => response.json())
    .then((json) => {
      if (json.success) dispatch(approveBookOrderSuccess(data.id))
    });
};

const deleteBookOrder = (url, csrf, data) => (dispatch) => {
  const headers = new Headers(
    { 'Content-Type': 'application/json', 'X-CSRF-TOKEN': csrf },
  );
  fetch(`${url}/${data.id}`, { method: 'DELETE', headers })
    .then((response) => response.json())
    .then((json) => {
      if (json.success) dispatch(removeBookOrder(data.id))
    });
};

export { fetchBookOrders, approveBookOrder, deleteBookOrder };
