import {createStore, combineReducers} from "redux";
import {messagesReducer} from "./reducer/messageReducer";
import {loadingReducer} from "./reducer/loadingReducer";
import {themeReducer} from "./reducer/themeReducer";

export type AppRootState = ReturnType<typeof rootReducer>

const rootReducer = combineReducers({
  messagePage: messagesReducer,
  loading: loadingReducer,
  theme: themeReducer
});

const store = createStore(rootReducer);

export default store;
