import {
  RECEIVE_SERVICES,
} from '../actions/services_actions';

const initialState = {
  services: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case RECEIVE_SERVICES:
      return { ...state, services: action.payload };
    default:
      return state;
  }
};
