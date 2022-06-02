import axiosClient from ".";

const routeName = "/products";

const productAPI = {
  getAllProducts: () => {
    return axiosClient.get(`${routeName}`);
  },
};

export default productAPI;
