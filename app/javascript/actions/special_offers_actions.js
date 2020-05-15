export const RECEIVE_SPECIAL_OFFERS = 'RECEIVE_SPECIAL_OFFERS';
const receiveSpecialOffers = (json) => ({
  type: RECEIVE_SPECIAL_OFFERS,
  payload: json,
});

export const RECEIVE_SPECIAL_OFFER = 'RECEIVE_SPECIAL_OFFER';
const receiveSpecialOffer = (json) => ({
  type: RECEIVE_SPECIAL_OFFER,
  payload: json,
});

const fetchSpecialOffers = () => (dispatch) => fetch('/hotel/special-offers')
  .then((response) => response.json())
  .then((json) => dispatch(receiveSpecialOffers(json.data)));

const fetchSpecialOffer = (id) => (dispatch) => fetch(`/hotel/special-offers/${id}`)
  .then((response) => response.json())
  .then((json) => dispatch(receiveSpecialOffer(json.data)));

export { fetchSpecialOffers, fetchSpecialOffer };
