// rxreducer
import { UPDATE_USER } from "../type/user";

const initialState = {
  username: "",
  email: "",
  money: 0,
};

const user = (state = initialState, { type, payload }) => {
  switch (type) {
    case UPDATE_USER:
      return { ...state, username: payload.username, email: payload.email };

    default:
      return state;
  }
};

export default user;
