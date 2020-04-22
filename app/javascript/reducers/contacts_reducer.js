import {
  RECEIVE_CONTACTS
} from '../actions/contacts_actions';

const initialState = {
  contacts: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case RECEIVE_CONTACTS:
      return { ...state, contacts: action.payload.contacts };
    default:
      return state;
  }
};
