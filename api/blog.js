import axiosClient from ".";

const routeName = "/blogs";

const blogAPI = {
    getBlogs: () => {
        return axiosClient.get(`${routeName}`);
    },
    getBlog: (id) => {
        return axiosClient.get(`${routeName}/find/${id}`);
    }
}

export default blogAPI;