import { AUTH_SUCCESS } from 'actions/index';

const initialState = {
  token: localStorage.getItem('token'),
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

    default:
      return state;
  }
};

export default rootReducer;
