export const RECEIVE_HOTEL_ROOM_IMAGES = 'RECEIVE_HOTEL_ROOM_IMAGES';
const receiveHotelRoomImages = (json) => ({
  type: RECEIVE_HOTEL_ROOM_IMAGES,
  payload: json,
});

export const SEND_ROOM_IMAGE_SUCCESS = 'SEND_ROOM_IMAGE_SUCCESS';
const sendRoomImageSuccess = (json) => ({
  type: SEND_ROOM_IMAGE_SUCCESS,
  payload: json
});

export const REMOVE_ROOM_IMAGE = 'REMOVE_ROOM_IMAGE';
const removeRoomImage = (id) => ({
  type: REMOVE_ROOM_IMAGE,
  payload: { id }
});

const fetchHotelRoomImages = (url) => (dispatch) => fetch(url)
  .then((response) => response.json())
  .then((json) => dispatch(receiveHotelRoomImages(json.data)));

const sendRoomImage = (url, csrf, data) => (dispatch) => {
  const headers = new Headers({ 'X-CSRF-TOKEN': csrf });

  let formData = new FormData();
  for (const key in data) {
    formData.append(key, data[key]);
  }

  fetch(url, { method: 'POST', headers, body: formData })
    .then((response) => response.json())
    .then((json) => {
      if (json.success) dispatch(sendRoomImageSuccess(json.data))
    });
};

const deleteRoomImage = (url, csrf, data) => (dispatch) => {
  const headers = new Headers(
    { 'Content-Type': 'application/json', 'X-CSRF-TOKEN': csrf },
  );
  fetch(`${url}/${data.id}`, { method: 'DELETE', headers })
    .then((response) => response.json())
    .then((json) => {
      if (json.success) dispatch(removeRoomImage(data.id))
    });
};

export { fetchHotelRoomImages, sendRoomImage, deleteRoomImage };
