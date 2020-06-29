import {
  RECEIVE_SPECIAL_OFFERS,
} from '../actions/special_offers_actions';

const initialState = {
  specialOffers: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case RECEIVE_SPECIAL_OFFERS:
      return { ...state, specialOffers: action.payload.special_offers };
    default:
      return state;
  }
};
