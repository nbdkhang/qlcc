import {combineReducers} from "redux";

// import reducer
import userReducer from "./user.js"


const rootReducer= combineReducers({
    user:userReducer
});
export default rootReducer;
