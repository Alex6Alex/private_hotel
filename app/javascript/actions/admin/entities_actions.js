export const RECEIVE_ENTITIES = 'RECEIVE_ENTITIES';
const receiveItems = (json) => ({
  type: RECEIVE_ENTITIES,
  payload: json,
});

export const RECEIVE_ENTITY = 'RECEIVE_ENTITY';
const receiveItem = (json) => ({
  type: RECEIVE_ENTITY,
  payload: json
});

export const SAVE_ENTITY_SUCCESS = 'SAVE_ENTITY_SUCCESS';
const saveItemSuccess = () => ({
  type: SAVE_ENTITY_SUCCESS
});

export const SAVE_ENTITY_FAIL = 'SAVE_ENTITY_FAIL';
const saveItemFail = (json) => ({
  type: SAVE_ENTITY_FAIL,
  payload: json
});

export const CLOSE_MESSAGE = 'CLOSE_MESSAGE';
const closeMessage = () => ({
  type: CLOSE_MESSAGE
});

export const REMOVE_ENTITY = 'REMOVE_ENTITY';
const removeItem = (id) => ({
  type: REMOVE_ENTITY,
  payload: { id }
});

const fetchItems = (url) => (dispatch) => fetch(url)
  .then((response) => response.json())
  .then((json) => dispatch(receiveItems(json.data)));

const fetchItem = (url, id) => (dispatch) => fetch(`${url}/${id}`)
  .then((response) => response.json())
  .then((json) => dispatch(receiveItem(json.data)));

const sendItem = (url, csrf, data) => (dispatch) => {
  const headers = new Headers({ 'X-CSRF-TOKEN': csrf });

  let formData = new FormData();
  for (const key in data) {
    formData.append(key, data[key]);
  }

  const method = data.id ? 'PUT' : 'POST';
  const apiUrl = data.id ? `${url}/${data.id}` : url;

  fetch(apiUrl, { method, headers, body: formData })
    .then((response) => response.json())
    .then((json) => {
      dispatch(json.success ? saveItemSuccess() : saveItemFail(json.errors));
    });
};

const deleteItem = (url, csrf, data) => (dispatch) => {
  const headers = new Headers(
    { 'Content-Type': 'application/json', 'X-CSRF-TOKEN': csrf },
  );
  fetch(`${url}/${data.id}`, { method: 'DELETE', headers })
    .then((response) => response.json())
    .then((json) => {
      if (json.success) dispatch(removeItem(data.id))
    });
};

const hideMessage = () => (dispatch) => dispatch(closeMessage());

export { fetchItems, fetchItem, sendItem, deleteItem, hideMessage };
