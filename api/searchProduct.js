import axiosClient from '.';

const routerName = '/products';

const searchApi = {
    searchProduct: (value) => {
        return axiosClient.get(`${routerName}/search?value=${value}`);
    },
};

export default searchApi;
