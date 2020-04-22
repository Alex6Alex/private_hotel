export const RECEIVE_ROOMS = 'RECEIVE_ROOMS';
const receiveRooms = (json) => {
  return {
    type: RECEIVE_ROOMS,
    payload: json
  }
};

export const RECEIVE_ROOM = 'RECEIVE_ROOM';
const receiveRoom = (json) => {
  return {
    type: RECEIVE_ROOM,
    payload: json
  }
};

const fetchRooms = () => {
  return function (dispatch) {
    return fetch('/hotel/rooms')
      .then(response => response.json())
      .then(json => dispatch(receiveRooms(json.data)));
  }
};

const fetchRoom = (id) => {
  return function (dispatch) {
    return fetch(`/hotel/rooms/${id}`)
      .then(response => response.json())
      .then(json => dispatch(receiveRoom(json.data)));
  }
};

export { fetchRooms, fetchRoom }
