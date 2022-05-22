import { LOGIN_USER, SET_USER, LOGOUT_USER, API_ERROR } from "./actionsTypes";

export const loginUser = (data) => ({
  type: LOGIN_USER,
  payload: data,
});

export const setUser = (user) => {
  localStorage.setItem("tech4um_user", JSON.stringify(user));

  return {
    type: SET_USER,
    payload: { user },
  };
};

export const logoutUser = () => {
  localStorage.removeItem("tech4um_user");

  return {
    type: LOGOUT_USER,
  };
};

export const apiError = (error) => ({
  type: API_ERROR,
  payload: error,
});
