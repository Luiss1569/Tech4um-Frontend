import { SET_USER, LOGIN_USER, LOGOUT_USER, API_ERROR } from "./actionsTypes";

const initialState = {
  data: undefined,
  status: {
    success: false,
    error: false,
    loading: false,
  },
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_USER:
      const { user } = action.payload;
      return {
        ...state,
        data: { ...user },
        status: { ...state.status, loading: false, success: true },
      };
    case LOGIN_USER:
      return { ...state, status: { ...state.status, loading: true } };
    case LOGOUT_USER:
      return {
        ...state,
        data: undefined,
        status: { ...state.status, success: false },
      };
    case API_ERROR:
      return {
        ...state,
        status: { ...state.status, loading: false, error: true },
      };
    default:
      return state;
  }
};
