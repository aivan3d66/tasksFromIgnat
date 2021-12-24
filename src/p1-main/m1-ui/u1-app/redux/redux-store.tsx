import {createStore, combineReducers} from "redux";
import {messagesReducer} from "./reducer/messageReducer";
import {loadingReducer} from "./reducer/loadingReducer";

const reducers = combineReducers({
  messagePage: messagesReducer,
  loading: loadingReducer,
});

const store = createStore(reducers);

export default store;
