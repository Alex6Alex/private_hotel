export const LOADING_ADMIN_PROFILE = 'LOADING_ADMIN_PROFILE';
const loadingAdminProfile = () => ({
  type: LOADING_ADMIN_PROFILE,
});

export const RECEIVE_ADMIN_PROFILE_SUCCESS = 'RECEIVE_ADMIN_PROFILE_SUCCESS';
const receiveAdminProfileSuccess = (json) => ({
  type: RECEIVE_ADMIN_PROFILE_SUCCESS,
  payload: json,
});

export const RECEIVE_ADMIN_PROFILE_FAILED = 'RECEIVE_ADMIN_PROFILE_FAILED';
const receiveAdminProfileFailed = () => ({
  type: RECEIVE_ADMIN_PROFILE_FAILED
});

export const CLOSE_ADMIN_PROFILE = 'CLOSE_ADMIN_PROFILE';
const closeAdminProfile = () => (dispatch) => {
  localStorage.removeItem('token');
  dispatch({ type: CLOSE_ADMIN_PROFILE });
};

const fetchAdminProfile = () => (dispatch) => {
  dispatch(loadingAdminProfile());

  const token = localStorage.getItem('token');
  const headers = new Headers(
    { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` }
  );
  fetch('/admin/authentication/profile', { method: 'GET', headers })
    .then((response) => response.json())
    .then((json) => {
      if (json.success)
        dispatch(receiveAdminProfileSuccess(json.data));
      else {
        localStorage.removeItem('token');
        dispatch(receiveAdminProfileFailed());
      }
    });
};

const authenticateAdmin = (data) => (dispatch) => {
  const headers = new Headers(
    { 'Content-Type': 'application/json', 'X-CSRF-TOKEN': data.csrf },
  );
  const body = JSON.stringify({ name: data.username, password: data.password });

  fetch('/admin/authentication/login', { method: 'POST', headers, body })
    .then((response) => response.json())
    .then((json) => {
      if (json.success) {
        localStorage.setItem('token', json.data.token);
        dispatch(receiveAdminProfileSuccess(json.data));
      }
    });
};

export { fetchAdminProfile, authenticateAdmin, closeAdminProfile };
