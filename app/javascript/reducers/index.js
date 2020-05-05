import { combineReducers } from 'redux';

import hotelRoomsReducer from './hotel_rooms_reducer';
import contactsReducer from './contacts_reducer';
import reviewsReducer from './reviews_reducer';
import descriptionsReducer from './descriptions_reducer';
import newsReducer from './news_reducer';
import servicesReducer from './services_reducer';

export default combineReducers({
  hotelRoomsReducer,
  contactsReducer,
  reviewsReducer,
  descriptionsReducer,
  newsReducer,
  servicesReducer
});
