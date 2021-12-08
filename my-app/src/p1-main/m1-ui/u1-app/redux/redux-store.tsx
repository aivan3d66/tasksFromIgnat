import {createStore, combineReducers} from "redux";
import {dialogsReducer} from "./reducer/DialogReducer";

const reducers = combineReducers({
  dialogPage: dialogsReducer,
});

const store = createStore(reducers);

export default store;
