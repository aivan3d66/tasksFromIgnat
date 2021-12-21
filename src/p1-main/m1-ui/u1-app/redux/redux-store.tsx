import {createStore, combineReducers} from "redux";
import {messagesReducer} from "./reducer/DialogReducer";

const reducers = combineReducers({
  messagePage: messagesReducer,
});

const store = createStore(reducers);

export default store;
