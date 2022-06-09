import { ADD_TO_CART, UPDATE_TO_CART, DEL_TO_CART } from "../type/cart";

// export const getCart = (data) => {
//   return { type: GET_CART, payload: data };
// };

export const addToCart = (data) => {
  return { type: ADD_TO_CART, payload: data };
};

export const updateCart = (data) => {
  return { type: UPDATE_TO_CART, payload: data };
};

export const delToCart = (data) => {
  return { type: DEL_TO_CART, payload: data };
};
