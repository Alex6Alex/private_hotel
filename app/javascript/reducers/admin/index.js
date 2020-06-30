import { combineReducers } from 'redux';

import authenticationReducer from './authentication_reducer';
import entitiesReducer from './entities_reducer';
import reviewsReducer from './reviews_reducer';
import hotelPhotosReducer from './hotel_photos_reducer';

export default combineReducers({
  authenticationReducer,
  entitiesReducer,
  reviewsReducer,
  hotelPhotosReducer,
});
