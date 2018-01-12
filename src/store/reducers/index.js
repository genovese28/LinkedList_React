import { combineReducers } from "redux";
import userReducer from "./userReducer";
import currentReducer from "./currentReducer";

const rootReducer = combineReducers({
	user: userReducer,
	current: currentReducer
});

export default rootReducer;
