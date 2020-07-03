import {
  RECEIVE_BOOK_ORDERS,
  APPROVE_BOOK_ORDER_SUCCESS,
  REMOVE_BOOK_ORDER,
} from '../../actions/admin/book_orders_actions';

const initialState = {
  bookOrders: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case RECEIVE_BOOK_ORDERS:
      return { ...state, bookOrders: action.payload };
    case APPROVE_BOOK_ORDER_SUCCESS:
      let bookOrders = state.bookOrders.map((bookOrder) => {
        if (bookOrder.id === action.payload.id) bookOrder.approved = true;
        return bookOrder;
      });
      return { ...state, bookOrders };
    case REMOVE_BOOK_ORDER:
      return { ...state, bookOrders: state.bookOrders.filter(order => order.id !== action.payload.id) };
    default:
      return state;
  }
};
