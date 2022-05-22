import { combineReducers } from "@reduxjs/toolkit";

import userReducer from "./user/reducer";
import roomReducer from "./room/reducer";
import applicationReducer from "./application/reducer";

const rootReducer = combineReducers({
    user: userReducer,
    forum: roomReducer,
    application: applicationReducer,
});

export default rootReducer;
