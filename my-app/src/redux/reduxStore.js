import { combineReducers, legacy_createStore as createStore } from "redux";
import profileReducer from "./profileReducer";
import sideReducer from "./sideReducer";
import messagesReducer from "./messagesReducer";
import userReducer from "./usersReducer";

let reducers = combineReducers({
  profile: profileReducer,
  messages: messagesReducer,
  side: sideReducer,
  users: userReducer,
});

let store = createStore(reducers);

export default store;
