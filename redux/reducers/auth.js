import { LOGIN, LOGOUT } from "../type/auth";

const initialState = {
  token: null,
  isLogin: false,
};

const auth = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOGIN:
      return { ...state, isLogin: true, token: payload };

    case LOGOUT: {
      return { ...state, isLogin: false, token: null };
    }

    default:
      return state;
  }
};

export default auth;
