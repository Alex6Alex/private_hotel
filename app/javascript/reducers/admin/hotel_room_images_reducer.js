import {
  RECEIVE_HOTEL_ROOM_IMAGES,
  SEND_ROOM_IMAGE_SUCCESS,
  REMOVE_ROOM_IMAGE,
} from '../../actions/admin/hotel_room_images_actions';

const initialState = {
  hotelRoomImages: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case RECEIVE_HOTEL_ROOM_IMAGES:
      return { ...state, hotelRoomImages: action.payload };
    case SEND_ROOM_IMAGE_SUCCESS:
    case REMOVE_ROOM_IMAGE:
      let hotelRoomImages = state.hotelRoomImages.map((hotelRoom) => {
        if (hotelRoom.id === action.payload.id)
          hotelRoom.hotel_room_images = action.payload.hotel_room_images;
        return hotelRoom;
      });
      return  { ...state, hotelRoomImages: hotelRoomImages };
    default:
      return state;
  }
};
