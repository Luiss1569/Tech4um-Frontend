import { takeEvery, fork, put, all, call } from "redux-saga/effects";
import { GET_ROOMS, GET_ROOM, CREATE_ROOM, SEND_MESSAGE } from "./actionsTypes";
import {
  setRooms,
  setRoom,
  createdRoom,
  apiError,
  sendedMessage,
} from "./action";
import { api } from "../../services/api";

export function* handleGetRooms() {
  try {
    const response = yield call(api.get, "/rooms");
    const { data } = response;
    yield put(setRooms([...data]));
  } catch (error) {
    yield put(apiError(error.message));
  }
}

export function* handleGetRoom(action) {
  try {
    const response = yield call(api.get, `/room/${action.payload.roomId}`);
    const { data } = response;
    yield put(setRoom({ ...data }));
  } catch (error) {
    yield put(apiError(error.message));
  }
}

export function* handleCreateRoom(data) {
  try {
    const response = yield call(api.post, "/room", data.payload.room);
    const { data: roomId } = response;
    yield put(createdRoom(roomId));
  } catch (error) {
    yield put(apiError(error.message));
  }
}

export function* handleSendMessage(action) {
  console.log("handleSendMessage", action);
  try {
    const response = yield call(
      api.post,
      `/room/${action.payload.roomId}/message`,
      {
        message: action.payload.message,
        toUserId: action.payload.to,
      }
    );
    yield put(sendedMessage());
  } catch (error) {
    yield put(apiError(error.message));
  }
}

export function* watchGetRoom() {
  yield takeEvery(GET_ROOM, handleGetRoom);
}

export function* watchGetRooms() {
  yield takeEvery(GET_ROOMS, handleGetRooms);
}

export function* watchCreateRoom() {
  yield takeEvery(CREATE_ROOM, handleCreateRoom);
}

export function* watchSendMessage() {
  yield takeEvery(SEND_MESSAGE, handleSendMessage);
}

function* userSaga() {
  yield all([fork(watchGetRooms)]);
  yield all([fork(watchGetRoom)]);
  yield all([fork(watchCreateRoom)]);
  yield all([fork(watchSendMessage)]);
}

export default userSaga;
