export const RECEIVE_DESCRIPTION_ABOUT_HOTEL = 'RECEIVE_DESCRIPTION_ABOUT_HOTEL';
const receiveDescriptionAboutHotel = (json) => ({
  type: RECEIVE_DESCRIPTION_ABOUT_HOTEL,
  payload: json,
});

const fetchDescriptionAboutHotel = () => (dispatch) => fetch('/hotel/descriptions/about-hotel')
  .then((response) => response.json())
  .then((json) => dispatch(receiveDescriptionAboutHotel(json.data)));

export { fetchDescriptionAboutHotel };
