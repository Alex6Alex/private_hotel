import { combineReducers } from 'redux';

import authenticationReducer from './authentication_reducer';
import entitiesReducer from './entities_reducer';
import reviewsReducer from './reviews_reducer';
import hotelPhotosReducer from './hotel_photos_reducer';
import hotelRoomImagesReducer from './hotel_room_images_reducer';
import conferenceRoomImagesReducer from './conference_room_images_reducer';
import bookOrdersReducer from './book_orders_reducer';

export default combineReducers({
  authenticationReducer,
  entitiesReducer,
  reviewsReducer,
  hotelPhotosReducer,
  hotelRoomImagesReducer,
  conferenceRoomImagesReducer,
  bookOrdersReducer,
});
