import {
  RECEIVE_CONFERENCE_ROOM,
} from '../actions/conference_room_actions';

const initialState = {
  conferenceRoom: {
    name: '',
    description: '',
    plan_image_link: '',
    conference_room_images: []
  }
};

export default (state = initialState, action) => {
  switch (action.type) {
    case RECEIVE_CONFERENCE_ROOM:
      return { ...state, conferenceRoom: action.payload };
    default:
      return state;
  }
};
