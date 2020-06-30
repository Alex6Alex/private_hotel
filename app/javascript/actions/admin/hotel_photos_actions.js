export const RECEIVE_PHOTOS = 'RECEIVE_PHOTOS';
const receivePhotos = (json) => ({
  type: RECEIVE_PHOTOS,
  payload: json,
});

export const SEND_PHOTO_SUCCESS = 'SEND_PHOTO_SUCCESS';
const sendPhotoSuccess = (json) => ({
  type: SEND_PHOTO_SUCCESS,
  payload: json
});

export const REMOVE_PHOTO = 'REMOVE_PHOTO';
const removePhoto = (id) => ({
  type: REMOVE_PHOTO,
  payload: { id }
});

const fetchPhotos = (url) => (dispatch) => fetch(url)
  .then((response) => response.json())
  .then((json) => dispatch(receivePhotos(json.data)));

const sendPhoto = (url, csrf, data) => (dispatch) => {
  const headers = new Headers({ 'X-CSRF-TOKEN': csrf });

  let formData = new FormData();
  for (const key in data) {
    formData.append(key, data[key]);
  }

  fetch(url, { method: 'POST', headers, body: formData })
    .then((response) => response.json())
    .then((json) => {
      if (json.success) dispatch(sendPhotoSuccess(json.data))
    });
};

const deletePhoto = (url, csrf, data) => (dispatch) => {
  const headers = new Headers(
    { 'Content-Type': 'application/json', 'X-CSRF-TOKEN': csrf },
  );
  fetch(`${url}/${data.id}`, { method: 'DELETE', headers })
    .then((response) => response.json())
    .then((json) => {
      if (json.success) dispatch(removePhoto(data.id))
    });
};

export { fetchPhotos, sendPhoto, deletePhoto };
