import { LOGIN, LOGOUT } from "../type/auth";

export const login = (data) => {
  localStorage.setItem("token", data);
  return { type: LOGIN, payload: data };
};

export const logout = () => {
  localStorage.removeItem("token");
  return { type: LOGOUT };
};
