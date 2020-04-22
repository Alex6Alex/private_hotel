export const RECEIVE_ROOMS = 'RECEIVE_ROOMS';
const receiveRooms = (json) => ({
  type: RECEIVE_ROOMS,
  payload: json,
});

export const RECEIVE_ROOM = 'RECEIVE_ROOM';
const receiveRoom = (json) => ({
  type: RECEIVE_ROOM,
  payload: json,
});

const fetchRooms = () => (dispatch) => fetch('/hotel/rooms')
  .then((response) => response.json())
  .then((json) => dispatch(receiveRooms(json.data)));

const fetchRoom = (id) => (dispatch) => fetch(`/hotel/rooms/${id}`)
  .then((response) => response.json())
  .then((json) => dispatch(receiveRoom(json.data)));

export { fetchRooms, fetchRoom };
