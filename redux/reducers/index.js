import { combineReducers } from "redux";
import user from "./user";
import auth from "./auth";
import cart from "./cart";

const root = combineReducers({
  user: user,
  auth: auth,
  cart: cart,
});

export default root;
