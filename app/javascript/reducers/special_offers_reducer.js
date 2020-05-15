import {
  RECEIVE_SPECIAL_OFFERS,
  RECEIVE_SPECIAL_OFFER,
} from '../actions/special_offers_actions';

const initialState = {
  specialOffer: {},
  specialOffers: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case RECEIVE_SPECIAL_OFFER:
      return { ...state, specialOffer: action.payload.special_offer };
    case RECEIVE_SPECIAL_OFFERS:
      return { ...state, specialOffers: action.payload.special_offers };
    default:
      return state;
  }
};
