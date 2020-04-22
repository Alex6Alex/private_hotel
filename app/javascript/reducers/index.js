import { combineReducers } from 'redux';

import hotelRoomsReducer from './hotel_rooms_reducer';
import contactsReducer from './contacts_reducer';

export default combineReducers({
  hotelRoomsReducer,
  contactsReducer,
});
