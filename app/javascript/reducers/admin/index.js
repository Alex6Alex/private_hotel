import { combineReducers } from 'redux';

import authenticationReducer from './authentication_reducer';
import entitiesReducer from './entities_reducer';

export default combineReducers({
  authenticationReducer,
  entitiesReducer
});
