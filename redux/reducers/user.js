// rxreducer
import { UPDATE_USER, UPDATE_ROUTER } from '../type/user';

const initialState = {
    username: '',
    email: '',
    money: 0,
    routeCurrent: null,
    dataUser: null,
};

const user = (state = initialState, { type, payload }) => {
    switch (type) {
        case UPDATE_USER:
            return { ...state, username: payload.username, email: payload.email, dataUser: payload };
        case UPDATE_ROUTER: {
            return {
                ...state,
                routeCurrent: payload,
            };
        }

        default:
            return state;
    }
};

export default user;
