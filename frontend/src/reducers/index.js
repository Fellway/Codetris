import { AUTH_FAILURE, AUTH_SUCCESS, LOGOUT_REQUEST } from 'actions/index';

const initialState = {
  token: localStorage.getItem('token'),
  error: '',
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

    default:
      return state;
  }
};

export default rootReducer;
