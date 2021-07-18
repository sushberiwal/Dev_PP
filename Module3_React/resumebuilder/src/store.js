import { createStore } from "redux";
import myReducer from "./Reducers/myReducer";

const store = createStore(myReducer);

export default store;