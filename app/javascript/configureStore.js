import { createStore, applyMiddleware } from 'redux';

import thunk from 'redux-thunk';

const initialState = {
  things: [
    {
      name: 'test',
      guid: '123',
    },
  ],
};

function rootReducer(state, action) {
  switch (action.type) {
    case 'GET_THINGS_SUCCESS':
      return { things: action.json.things };
    default:
      return state;
  }
}

export default function configureStore() {
  return createStore(
    rootReducer,
    initialState,
    applyMiddleware(thunk),
  );
}
