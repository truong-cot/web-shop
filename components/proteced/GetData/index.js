import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { login, toggleLoading } from './../../../redux/actions/auth';
import { updateUser } from './../../../redux/actions/user';
import { getCart } from './../../../redux/actions/cart';

function GetData({ children }) {
    const dispatch = useDispatch();

    useEffect(() => {
        const token = localStorage.getItem('token');
        const userData = localStorage.getItem('user');
        const cart = localStorage.getItem('_cart');

        if (token) {
            dispatch(login(token));
            dispatch(getCart(JSON.parse(cart)));
            dispatch(updateUser(JSON.parse(userData)));
        }

        dispatch(toggleLoading());
    }, [dispatch]);
    return <>{children}</>;
}

export default GetData;
