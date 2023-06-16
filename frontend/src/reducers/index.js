import { combineReducers } from "redux";
import auth from './auth';
import product from './product';
import alert from "./alert";
import loader from "./loader";

export default combineReducers({
    auth,
    product,
    loader,
    alert,
})