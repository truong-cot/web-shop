import { LOGIN, LOGOUT,UPDATE_LOADING } from "../type/auth";

const initialState = {
  token: null,
  isLogin: false,
  isLoading: true,
};

const auth = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOGIN:
      return { ...state, isLogin: true, token: payload };
      case LOGOUT: {
        return { ...state, isLogin: false, token: null };
      }
      case UPDATE_LOADING:
        return { ...state, isLoading: false };

    default:
      return state;
  }
};

export default auth;
