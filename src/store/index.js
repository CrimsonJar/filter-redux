import { createStore, combineReducers } from "redux";
import serviceListReducer from "../redux/serviceList";

import serviceAddReducer from "../redux/serviceAdd";

const reducer = combineReducers({
  serviceList: serviceListReducer,
  serviceAdd: serviceAddReducer,
});
const store = createStore(reducer);
export default store;
