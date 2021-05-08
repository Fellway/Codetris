import { AUTH_FAILURE, AUTH_SUCCESS, LOGOUT_REQUEST, FETCH_SUCCESS } from 'actions/index';

const initialState = {
  token: localStorage.getItem('token'),
  error: '',
  projects: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTH_SUCCESS: {
      localStorage.setItem('token', action.payload.data.token);
      return {
        ...state,
        token: action.payload.data.token,
      };
    }

    case AUTH_FAILURE: {
      return {
        ...state,
        error: action.err.message,
      };
    }

    case LOGOUT_REQUEST: {
      localStorage.removeItem('token');
      return {
        ...state,
        token: null,
      };
    }

    case FETCH_SUCCESS: {
      return {
        ...state,
        projects: action.payload.content,
      };
    }

    default:
      return state;
  }
};

export default rootReducer;
