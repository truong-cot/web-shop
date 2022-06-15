import { LOGIN, LOGOUT,UPDATE_LOADING } from "../type/auth";

export const login = (data) => {
  localStorage.setItem("token", data);
  return { type: LOGIN, payload: data };
};

export const logout = () => {
  localStorage.removeItem("token");
  return { type: LOGOUT };
};

export const toggleLoading = () => ({ type: UPDATE_LOADING });