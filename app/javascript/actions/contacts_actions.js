export const RECEIVE_CONTACTS = 'RECEIVE_CONTACTS';
const receiveContacts = (json) => {
  return {
    type: RECEIVE_CONTACTS,
    payload: json
  }
};

const fetchContacts = () => {
  return function (dispatch) {
    return fetch('/v1/contacts')
      .then(response => response.json())
      .then(json => dispatch(receiveContacts(json)));
  }
};

export { fetchContacts }
