import axiosClient from ".";

const routeName = "/auth";

const authAPI = {
  register: (formData) => {
    return axiosClient.post(`${routeName}/register`, formData);
  },
  login: (formData) => {
    return axiosClient.post(`${routeName}/login`, formData);
  },
};

export default authAPI;
