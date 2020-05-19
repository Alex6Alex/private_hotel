import {
  LOADING_ADMIN_PROFILE,
  RECEIVE_ADMIN_PROFILE
} from '../../actions/admin/authentication_actions';

const initialState = {
  isAdminProfileLoading: false,
  isLoggedIn: false,
  admin: {}
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOADING_ADMIN_PROFILE:
      return { ...state, isAdminProfileLoading: true };
    case RECEIVE_ADMIN_PROFILE:
      return {
        ...state,
        isLoggedIn: true,
        admin: action.payload.admin,
        isAdminProfileLoading: false
      };
    default:
      return state;
  }
};
