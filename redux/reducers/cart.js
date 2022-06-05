import { ADD_TO_CART, REMOVE_FROM_CART, ADJUST_QUANTILY } from "../type/cart";

const initialState = {
  cart: [],
};

const cart = (state = initialState, action) => {
  switch (action) {
    case ADD_TO_CART:
      const item = state.cart.find((product) => product.id === payload.id);

      const inCart = state.cart.find((item) =>
        item.id === payload.id ? true : false
      );

      return {
        ...state,
        cart: inCart
          ? state.cart.map((item) =>
              item.id === payload.id
                ? { ...item, quantity: item.quantity + 1 }
                : item
            )
          : [...state.cart, { ...item, quantity: 1 }],
      };

    case REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== payload.id),
      };

    case ADJUST_QUANTILY:
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === payload.id
            ? { ...item, quantity: payload.quantity }
            : item
        ),
      };

    default:
      return state;
  }
};

export default cart;
