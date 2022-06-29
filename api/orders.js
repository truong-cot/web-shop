import axiosClient from '.';

const routeName = '/orders';

const ordersAPI = {
    createOrder: (data, token) => {
        return axiosClient.post(`${routeName}`, data, {
            headers: {
                token: 'Bearer ' + token,
            },
        });
    },

    getUserOrders: (userId,token) => {
        return axiosClient.get(`${routeName}/find/user/${userId}`, {
            headers: {
                token: 'Bearer ' + token,
            },
        });
    },
};

export default ordersAPI;
