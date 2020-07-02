export const RECEIVE_CONFERENCE_ROOM = 'RECEIVE_CONFERENCE_ROOM';
const receiveConferenceRoom = (json) => ({
  type: RECEIVE_CONFERENCE_ROOM,
  payload: json,
});

const fetchConferenceRoom = () => (dispatch) => fetch('/hotel/conference-room')
  .then((response) => response.json())
  .then((json) => dispatch(receiveConferenceRoom(json.data)));

export { fetchConferenceRoom };
