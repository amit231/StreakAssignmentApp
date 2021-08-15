import { combineReducers } from "redux";
import usersReducer from "./userReducer";


const rootReducer = combineReducers({
    usersReducer: usersReducer
});

export default rootReducer;
