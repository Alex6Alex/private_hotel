import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import reducer from '../reducers/admin/index';

export default () => createStore(reducer, applyMiddleware(thunk));
