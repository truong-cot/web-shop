import { UPDATE_USER } from "../type/user";

export const updateUser = (data) => {
  return { type: UPDATE_USER, payload: data };
};
