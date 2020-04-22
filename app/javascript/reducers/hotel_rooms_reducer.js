import {
  RECEIVE_ROOMS,
  RECEIVE_ROOM
} from '../actions/rooms_actions';

const initialState = {
  room: {
    description: ''
  },
  rooms: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case RECEIVE_ROOM:
      return { ...state, room: action.payload.room };
    case RECEIVE_ROOMS:
      return { ...state, rooms: action.payload.rooms };
    default:
      return state;
  }
};
