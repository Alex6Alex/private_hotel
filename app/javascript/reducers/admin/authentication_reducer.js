import {
  LOADING_ADMIN_PROFILE,
  RECEIVE_ADMIN_PROFILE_SUCCESS,
  RECEIVE_ADMIN_PROFILE_FAILED,
  CLOSE_ADMIN_PROFILE
} from '../../actions/admin/authentication_actions';

const initialState = {
  isAdminProfileLoading: true,
  isLoggedIn: false,
  admin: {}
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOADING_ADMIN_PROFILE:
      return { ...state, isAdminProfileLoading: true };
    case RECEIVE_ADMIN_PROFILE_SUCCESS:
      return {
        ...state,
        isLoggedIn: true,
        admin: action.payload.admin,
        isAdminProfileLoading: false
      };
    case RECEIVE_ADMIN_PROFILE_FAILED:
    case CLOSE_ADMIN_PROFILE:
      return { ...state, isLoggedIn: false, isAdminProfileLoading: false, admin: {} };
    default:
      return state;
  }
};
