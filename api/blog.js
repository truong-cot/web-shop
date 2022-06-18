import axiosClient from '.';

const routerName = '/blogs';

const blogAPI = {
    getBlogs: () => {
        return axiosClient.get(`${routerName}`);
    },
    getBlog: (id) => {
        return axiosClient.get(`${routerName}/find/${id}`);
    },
};

export default blogAPI;
