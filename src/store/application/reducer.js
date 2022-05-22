import {
  SET_ACTIVE_ROOM,
  SET_SHOW_WIDGETS,
  SET_LOGIN_MODAL,
  SET_PRIVATE_MESSAGE,
} from "./actionsTypes";

const initialState = {
  activeRoom: null,
  showWidgets: {
    chat: true,
    users: true,
  },
  loginModal: false,
  privateMessage: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_ACTIVE_ROOM:
      return {
        ...state,
        activeRoom: action.payload.roomId,
      };
    case SET_SHOW_WIDGETS:
      return {
        ...state,
        showWidgets: {
          ...state.showWidgets,
          [action.payload.widget]: !state.showWidgets[action.payload.widget],
        },
      };
    case SET_LOGIN_MODAL:
      return {
        ...state,
        loginModal: action.payload.modal,
      };
    case SET_PRIVATE_MESSAGE:
      return {
        ...state,
        privateMessage: action.payload.user,
      };
    default:
      return state;
  }
};
