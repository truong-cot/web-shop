import axiosClient from ".";

const routeName = "/products";

const productAPI = {
  getProducts: () => {
    return axiosClient.get(`${routeName}`);
  },
  getProduct: (id) => {
    return axiosClient.get(`${routeName}/find/${id}`);
  },
  getCategory: (query) => {
    return axiosClient.get(`${routeName}?category=${query}`);
  },
  
};

export default productAPI;
