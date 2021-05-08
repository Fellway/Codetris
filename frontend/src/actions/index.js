import axios from 'axios';

export const AUTH_REQUEST = 'AUTH_REQUEST';
export const AUTH_SUCCESS = 'AUTH_SUCCESS';
export const AUTH_FAILURE = 'AUTH_FAILURE';
export const LOGOUT_REQUEST = 'LOGOUT_REQUEST';
export const FETCH_REQUEST = 'FETCH_REQUEST';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_FAILURE = 'FETCH_FAILURE';

export const authenticate = (username, password) => (dispatch) => {
  dispatch({ type: AUTH_REQUEST });

  return axios
    .post('http://localhost:8080/api/v1/auth', {
      username,
      password,
    })
    .then((payload) => {
      dispatch({ type: AUTH_SUCCESS, payload });
    })
    .catch((err) => {
      dispatch({ type: AUTH_FAILURE, err });
    });
};

export const logout = () => (dispatch) => {
  dispatch({ type: LOGOUT_REQUEST });
};

export const fetchProjects = (page, size) => (dispatch) => {
  dispatch({ type: FETCH_REQUEST });

  return axios
    .get('http://localhost:8080/api/v1/projects', {
      params: {
        page,
        size,
      },
    })
    .then(({ data }) => {
      dispatch({
        type: FETCH_SUCCESS,
        payload: {
          ...data,
        },
      });
    })
    .catch((err) => {
      dispatch({ type: FETCH_FAILURE, err });
    });
};
