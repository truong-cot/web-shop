import { ADD_TO_CART, GET_CART, UPDATE_TO_CART, DEL_TO_CART } from '../type/cart';

import { setItemStorage } from '../../common/utils/localStorage';

const initialState = {
    cart: [],
};

const cart = (state = initialState, { type, payload }) => {
    switch (type) {
        case ADD_TO_CART: {
            if (
                /*---------- Kiểm tra nếu đã có sản phẩm trong giỏ hàng, update số lượng ----------*/
                state.cart.some((item) => item?._id === payload._id)
            ) {
                const cart = state.cart.map((item) => {
                    if (item?._id === payload._id) {
                        return {
                            ...item,
                            quantily: item.quantily + payload.quantily,
                        };
                    }
                    return item;
                });

                addCarttoLocal(cart);
                return {
                    ...state,
                    cart,
                };
            } else {
                //**********************
                //* Kiểm tra nếu chưa có sản phẩm trong giỏ hàng thêm sản phẩm về array hiện có,
                //* thêm trường isCheck=true, isCheck=true là các sản phẩm sẽ có trong thanh toán
                //**********************
                const cart = [{ ...payload }, ...state.cart];

                addCarttoLocal(cart);
                return {
                    ...state,
                    cart,
                };
            }
        }
        case UPDATE_TO_CART: {
            const cart = state.cart.map((item) => {
                if (item?._id === payload._id) {
                    return payload;
                }
                return item;
            });

            addCarttoLocal(cart);
            return {
                ...state,
                cart,
            };
        }
        case GET_CART: {
            addCarttoLocal(payload);
            return {
                ...state,
                cart: payload,
            };
        }
        case DEL_TO_CART: {
            const cart = state.cart.filter((item) => {
                if (item?._id !== payload._id) {
                    return item;
                }
            });

            addCarttoLocal(cart);
            return {
                ...state,
                cart,
            };
        }

        default:
            return state;
    }
};

export default cart;

const addCarttoLocal = (cart) => {
    setItemStorage('_cart', cart);
};
