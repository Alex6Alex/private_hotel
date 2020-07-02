export const RECEIVE_CONFERENCE_ROOM_IMAGES = 'RECEIVE_CONFERENCE_ROOM_IMAGES';
const receiveConferenceRoomImages = (json) => ({
  type: RECEIVE_CONFERENCE_ROOM_IMAGES,
  payload: json,
});

export const SEND_CONF_ROOM_IMAGE_SUCCESS = 'SEND_CONF_ROOM_IMAGE_SUCCESS';
const sendConferenceRoomImageSuccess = (json) => ({
  type: SEND_CONF_ROOM_IMAGE_SUCCESS,
  payload: json
});

export const REMOVE_CONFERENCE_ROOM_IMAGE = 'REMOVE_CONFERENCE_ROOM_IMAGE';
const removeConferenceRoomImage = (json) => ({
  type: REMOVE_CONFERENCE_ROOM_IMAGE,
  payload: json
});

const fetchConferenceRoomImages = (url) => (dispatch) => fetch(url)
  .then((response) => response.json())
  .then((json) => dispatch(receiveConferenceRoomImages(json.data)));

const sendConferenceRoomImage = (url, csrf, data) => (dispatch) => {
  const headers = new Headers({ 'X-CSRF-TOKEN': csrf });

  let formData = new FormData();
  for (const key in data) {
    formData.append(key, data[key]);
  }

  fetch(url, { method: 'POST', headers, body: formData })
    .then((response) => response.json())
    .then((json) => {
      if (json.success) dispatch(sendConferenceRoomImageSuccess(json.data))
    });
};

const deleteConferenceRoomImage = (url, csrf, data) => (dispatch) => {
  const headers = new Headers(
    { 'Content-Type': 'application/json', 'X-CSRF-TOKEN': csrf },
  );
  fetch(`${url}/${data.id}`, { method: 'DELETE', headers })
    .then((response) => response.json())
    .then((json) => {
      if (json.success) dispatch(removeConferenceRoomImage(json.data))
    });
};

export { fetchConferenceRoomImages, sendConferenceRoomImage, deleteConferenceRoomImage };
