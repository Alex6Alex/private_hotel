import {
  RECEIVE_NEW_BOOK_ORDER,
} from '../actions/book_orders_actions';

const initialState = {
  // reviews: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case RECEIVE_NEW_BOOK_ORDER:
      return state;
    default:
      return state;
  }
};
