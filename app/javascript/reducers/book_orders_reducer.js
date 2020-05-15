import {
  RECEIVE_NEW_BOOK_ORDER,
} from '../actions/book_orders_actions';

const initialState = {
  sentBookOrder: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case RECEIVE_NEW_BOOK_ORDER:
      return { ...state, sentBookOrder: action.payload.book_order };
    default:
      return state;
  }
};
