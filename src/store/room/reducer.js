import {
  GET_ROOMS,
  GET_ROOM,
  SET_ROOMS,
  SET_ROOM,
  CREATE_ROOM,
  CREATED_ROOM,
  ADD_ROOM,
  REMOVE_ROOM,
  ADD_MESSAGE,
  ADD_USER,
  REMOVE_USER,
  SEND_MESSAGE,
  SENDED_MESSAGE,
  API_ERROR,
} from "./actionsTypes";

const initialState = {
  rooms: [],
  room: {},
  status: {
    getRooms: {
      loading: false,
      error: null,
      success: null,
    },
    getRoom: {
      loading: false,
      error: null,
      success: null,
    },
    createRoom: {
      loading: false,
      error: null,
      success: null,
    },
    sendMessage: {
      loading: false,
      error: null,
      success: null,
    },
  },
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_ROOMS:
      return {
        ...state,
        status: {
          ...state.status,
          getRooms: {
            loading: true,
            error: null,
            success: null,
          },
        },
      };
    case SET_ROOMS:
      return {
        ...state,
        rooms: action.payload.rooms,
        status: {
          ...state.status,
          getRooms: {
            loading: false,
            error: null,
            success: true,
          },
        },
      };
    case GET_ROOM:
      return {
        ...state,
        status: {
          ...state.status,
          getRoom: {
            loading: true,
            error: null,
            success: null,
          },
        },
      };
    case SET_ROOM:
      return {
        ...state,
        room: {
          ...state.room,
          [action.payload.room.id]: action.payload.room,
        },
        status: {
          ...state.status,
          getRoom: {
            loading: false,
            error: null,
            success: true,
          },
        },
      };
    case CREATE_ROOM:
      return {
        ...state,
        status: {
          ...state.status,
          createRoom: {
            loading: true,
            error: null,
            success: null,
          },
        },
      };
    case CREATED_ROOM:
      return {
        ...state,
        status: {
          ...state.status,
          createRoom: {
            loading: false,
            error: null,
            success: true,
          },
        },
      };
    case ADD_ROOM:
      return {
        ...state,
        rooms: [...state.rooms, action.payload.room],
      };
    case REMOVE_ROOM:
      return {
        ...state,
        rooms: state.rooms.filter((room) => room.id !== action.payload.roomId),
      };
    case ADD_MESSAGE:
      return {
        ...state,
        room: {
          ...state.room,
          [action.payload.roomId]: {
            ...state.room[action.payload.roomId],
            messages: [
              ...state.room[action.payload.roomId].messages,
              action.payload.message,
            ],
          },
        },
      };
    case ADD_USER:
      return {
        ...state,
        room: {
          ...state.room,
          [action.payload.roomId]: {
            ...state.room[action.payload.roomId],
            users: [
              ...state.room[action.payload.roomId].users,
              action.payload.user,
            ],
          },
        },
      };
    case REMOVE_USER:
      return {
        ...state,
        room: {
          ...state.room,
          [action.payload.roomId]: {
            ...state.room[action.payload.roomId],
            users: state.room[action.payload.roomId].users.filter(
              (user) => user.id !== action.payload.userId
            ),
          },
        },
      };
    case SEND_MESSAGE:
      return {
        ...state,
        status: {
          ...state.status,
          sendMessage: {
            loading: true,
            error: null,
            success: null,
          },
        },
      };
    case SENDED_MESSAGE:
      return {
        ...state,
        status: {
          ...state.status,
          sendMessage: {
            loading: false,
            error: null,
            success: true,
          },
        },
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
