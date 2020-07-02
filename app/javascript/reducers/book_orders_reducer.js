import {
  BOOK_ORDER_WAS_CREATED,
  BOOK_ORDER_WAS_NOT_CREATED,
  CLOSE_MESSAGE,
} from '../actions/book_orders_actions';

const initialState = {
  showMessage: false,
  errors: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case BOOK_ORDER_WAS_CREATED:
      return { ...state, showMessage: true, errors: [] };
    case BOOK_ORDER_WAS_NOT_CREATED:
      return { ...state, errors: action.payload, showMessage: true };
    case CLOSE_MESSAGE:
      return { ...state, errors: [], showMessage: false };
    default:
      return state;
  }
};
