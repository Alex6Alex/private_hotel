import {
  RECEIVE_ROOMS,
  RECEIVE_ROOM,
} from '../actions/rooms_actions';

const initialState = {
  room: {
    description: '',
    hotel_room_images: []
  },
  rooms: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case RECEIVE_ROOM:
      return { ...state, room: action.payload };
    case RECEIVE_ROOMS:
      return { ...state, rooms: action.payload };
    default:
      return state;
  }
};
