import {
  RECEIVE_CONFERENCE_ROOM_IMAGES,
  SEND_CONF_ROOM_IMAGE_SUCCESS,
  REMOVE_CONFERENCE_ROOM_IMAGE,
} from '../../actions/admin/conference_room_images_actions';

const initialState = {
  conferenceRoomImages: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case RECEIVE_CONFERENCE_ROOM_IMAGES:
      return { ...state, conferenceRoomImages: action.payload };
    case SEND_CONF_ROOM_IMAGE_SUCCESS:
    case REMOVE_CONFERENCE_ROOM_IMAGE:
      let conferenceRoomImages = state.conferenceRoomImages.map((confRoom) => {
        if (confRoom.id === action.payload.id)
          confRoom.conference_room_images = action.payload.conference_room_images;
        return confRoom;
      });
      return  { ...state, conferenceRoomImages };
    default:
      return state;
  }
};
