export const LOADING_ADMIN_PROFILE = 'LOADING_ADMIN_PROFILE';
const loadingAdminProfile = () => ({
  type: LOADING_ADMIN_PROFILE,
});

export const RECEIVE_ADMIN_PROFILE = 'RECEIVE_ADMIN_PROFILE';
const receiveAdminProfile = (json) => ({
  type: RECEIVE_ADMIN_PROFILE,
  payload: json,
});

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
        dispatch(receiveAdminProfile(json.data));
      else
        localStorage.removeItem('token');
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
        dispatch(receiveAdminProfile(json.data));
      }
    });
};

export { fetchAdminProfile, authenticateAdmin };
