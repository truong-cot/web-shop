import { combineReducers } from "redux";
import user from "./user";
import auth from "./auth";

const root = combineReducers({
  user: user,
  auth: auth,
});

export default root;
