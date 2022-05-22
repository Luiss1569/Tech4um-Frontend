import { takeEvery, fork, put, all, call } from "redux-saga/effects";
import { LOGIN_USER } from "./actionsTypes";
import { setUser, apiError } from "./action";
import { api } from "../../services/api";

export function* handleUserLogin(action) {
  console.log("handleUserLogin", action);
  try {
    const response = yield call(api.post, "/login", action.payload);
    const { data } = response;
    yield put(setUser({ ...data }));
  } catch (error) {
    yield put(apiError(error.message));
  }
}

export function* watchLoginUser() {
  yield takeEvery(LOGIN_USER, handleUserLogin);
}
function* userSaga() {
  yield all([fork(watchLoginUser)]);
}

export default userSaga;
