import { UPDATE_USER, UPDATE_ROUTER } from "../type/user";

export const updateUser = (data) => {
  return { type: UPDATE_USER, payload: data };
};

export const updateRoute = (data) => {
  return { type: UPDATE_ROUTER, payload: data };
};
