import {
  GET_ROOMS,
  GET_ROOM,
  SET_ROOMS,
  SET_ROOM,
  CREATE_ROOM,
  ADD_ROOM,
  REMOVE_ROOM,
  ADD_MESSAGE,
  ADD_USER,
  REMOVE_USER,
  CREATED_ROOM,
  SEND_MESSAGE,
  SENDED_MESSAGE,
  API_ERROR,
} from "./actionsTypes";

export const getRooms = () => ({
  type: GET_ROOMS,
});

export const setRooms = (rooms) => ({
  type: SET_ROOMS,
  payload: { rooms },
});

export const getRoom = (roomId) => ({
  type: GET_ROOM,
  payload: { roomId },
});

export const setRoom = (room) => ({
  type: SET_ROOM,
  payload: { room },
});

export const createRoom = (room) => ({
  type: CREATE_ROOM,
  payload: { room },
});

export const createdRoom = (roomId) => ({
  type: CREATED_ROOM,
  payload: { roomId },
});

export const addRoom = (room) => ({
  type: ADD_ROOM,
  payload: { room },
});

export const removeRoom = (roomId) => ({
  type: REMOVE_ROOM,
  payload: { roomId },
});

export const addMessage = (roomId, message) => ({
  type: ADD_MESSAGE,
  payload: {
    roomId,
    message,
  },
});

export const addUser = (roomId, user) => ({
  type: ADD_USER,
  payload: {
    roomId,
    user,
  },
});

export const removeUser = (roomId, userId) => ({
  type: REMOVE_USER,
  payload: {
    roomId,
    userId,
  },
});

export const setCreatedRoom = (room) => ({
  type: SET_CREATED_ROOM,
  payload: room,
});

export const apiError = (error) => ({
  type: API_ERROR,
  payload: error,
});

export const sendMessage = (roomId, message, to) => ({
  type: SEND_MESSAGE,
  payload: {
    roomId,
    message,
    to,
  },
});

export const sendedMessage = () => ({
  type: SENDED_MESSAGE,
});
