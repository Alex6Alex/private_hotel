export const RECEIVE_CONTACTS = 'RECEIVE_CONTACTS';
const receiveContacts = (json) => ({
  type: RECEIVE_CONTACTS,
  payload: json,
});

const fetchContacts = () => (dispatch) => fetch('/v1/contacts')
  .then((response) => response.json())
  .then((json) => dispatch(receiveContacts(json)));

export { fetchContacts };
