import { combineReducers, legacy_createStore as createStore } from "redux"
import profileReducer from "./profileReducer"
import sideRecucer from "./sideReducer"
import messagesReducer from "./messagesReducer"

let reducers = combineReducers({
  profile: profileReducer,
  messages: messagesReducer,
  side: sideRecucer,
})

let store = createStore(reducers)

export default store