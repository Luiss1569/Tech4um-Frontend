import {
  SET_ACTIVE_ROOM,
  SET_SHOW_WIDGETS,
  SET_LOGIN_MODAL,
  SET_PRIVATE_MESSAGE,
} from "./actionsTypes";

export const setActiveRoom = (roomId) => ({
  type: SET_ACTIVE_ROOM,
  payload: { roomId },
});

export const setShowWidgets = (widget) => ({
  type: SET_SHOW_WIDGETS,
  payload: {
    widget,
  },
});

export const setLoginModal = (modal) => ({
  type: SET_LOGIN_MODAL,
  payload: {
    modal,
  },
});

export const setPrivateMessage = (user) => ({
  type: SET_PRIVATE_MESSAGE,
  payload: {
    user,
  },
});
