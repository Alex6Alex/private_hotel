export const RECEIVE_SPECIAL_OFFERS = 'RECEIVE_SPECIAL_OFFERS';
const receiveSpecialOffers = (json) => ({
  type: RECEIVE_SPECIAL_OFFERS,
  payload: json,
});

const fetchSpecialOffers = () => (dispatch) => fetch('/hotel/special-offers')
  .then((response) => response.json())
  .then((json) => dispatch(receiveSpecialOffers(json.data)));

export { fetchSpecialOffers };
