import {
  RECEIVE_HOTEL_ROOM_IMAGES,
  SEND_ROOM_IMAGE_SUCCESS,
  REMOVE_ROOM_IMAGE,
} from '../../actions/admin/hotel_room_images_actions';

const initialState = {
  hotelRoomImages: [],
};

export default (state = initialState, action) => {
  let hotelRoomImages;

  switch (action.type) {
    case RECEIVE_HOTEL_ROOM_IMAGES:
      return { ...state, hotelRoomImages: action.payload };
    case SEND_ROOM_IMAGE_SUCCESS:
      hotelRoomImages = state.hotelRoomImages.map((hotelRoom) => {
        if (hotelRoom.id === action.payload.id)
          hotelRoom.hotel_room_images = action.payload.hotel_room_images;
        return hotelRoom;
      });
      return { ...state, hotelRoomImages: hotelRoomImages };
    case REMOVE_ROOM_IMAGE:
      hotelRoomImages = state.hotelRoomImages.map((hotelRoom) => {
        hotelRoom.hotel_room_images = hotelRoom.hotel_room_images.filter((photo) => {
          return photo.id !== action.payload.id
        });
        return hotelRoom;
      });
      return { ...state, hotelRoomImages: hotelRoomImages };
    default:
      return state;
  }
};
