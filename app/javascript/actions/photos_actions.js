export const RECEIVE_PHOTOS = 'RECEIVE_PHOTOS';
const receivePhotos = (json) => ({
  type: RECEIVE_PHOTOS,
  payload: json,
});

const fetchPhotos = () => (dispatch) => fetch(`/hotel/photos`)
  .then((response) => response.json())
  .then((json) => dispatch(receivePhotos(json.data)));

export { fetchPhotos };
