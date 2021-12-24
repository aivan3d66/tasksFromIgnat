import {createStore, combineReducers} from "redux";
import {messagesReducer} from "./reducer/DialogReducer";
import {loadingReducer} from "../../../../p2-homeworks/h10/bll/loadingReducer";

const reducers = combineReducers({
  messagePage: messagesReducer,
  loading: loadingReducer,
});

const store = createStore(reducers);

export default store;
