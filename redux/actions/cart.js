import { ADD_TO_CART, REMOVE_FROM_CART, ADJUST_QUANTILY } from "../type/cart";

export const addToCart = (idProduct) => {
  return {
    type: ADD_TO_CART,
    payload: {
      id: idProduct,
    },
  };
};

export const removeToCart = (idProduct) => {
  return {
    type: REMOVE_FROM_CART,
    payload: {
      id: idProduct,
    },
  };
};

export const adjustQuantily = (idProduct, value) => {
  return {
    type: ADJUST_QUANTILY,
    payload: {
      id: idProduct,
      quantily: value,
    },
  };
};
