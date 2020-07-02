import {
  RECEIVE_DESCRIPTION_ABOUT_HOTEL,
} from '../actions/descriptions_actions';

const initialState = {};

export default (state = initialState, action) => {
  switch (action.type) {
    case RECEIVE_DESCRIPTION_ABOUT_HOTEL:
      return { ...state, aboutHotel: action.payload };
    default:
      return state;
  }
};
