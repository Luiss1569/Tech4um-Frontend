import { all } from "redux-saga/effects";

import userSaga from "./user/saga";
import roomSaga from "./room/saga";

export default function* rootSaga() {
  yield all([
    userSaga(),
    roomSaga(),
  ]);
}
