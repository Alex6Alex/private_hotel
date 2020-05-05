export const RECEIVE_SERVICES = 'RECEIVE_SERVICES';
const receiveServices = (json) => ({
  type: RECEIVE_SERVICES,
  payload: json,
});

const fetchServices = () => (dispatch) => fetch('/hotel/services')
  .then((response) => response.json())
  .then((json) => dispatch(receiveServices(json.data)));

export { fetchServices };
