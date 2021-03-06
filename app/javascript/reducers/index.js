import { combineReducers } from 'redux';

import hotelRoomsReducer from './hotel_rooms_reducer';
import contactsReducer from './contacts_reducer';
import reviewsReducer from './reviews_reducer';
import descriptionsReducer from './descriptions_reducer';
import newsReducer from './news_reducer';
import servicesReducer from './services_reducer';
import bookOrdersReducer from './book_orders_reducer';
import specialOffersReducer from './special_offers_reducer';
import articleReducer from './article_reducer';
import photosReducer from './photos_reducer';
import conferenceRoomReducer from './conference_room_reducer';

export default combineReducers({
  hotelRoomsReducer,
  contactsReducer,
  reviewsReducer,
  descriptionsReducer,
  newsReducer,
  servicesReducer,
  bookOrdersReducer,
  specialOffersReducer,
  articleReducer,
  photosReducer,
  conferenceRoomReducer,
});
