//**********************
//* COMPONENT PROTECTED SCREEN THEN LOGIN
//**********************

import { useRouter } from 'next/router';
import { Fragment, memo } from 'react';
import { useSelector } from 'react-redux';

function RequiredLogout({ children }) {
    const router = useRouter();
    const { isLogin, isLoading } = useSelector((state) => state.auth);
    const { routeCurrent } = useSelector((state) => state.user);

    /********** redirect home when user login  **********/

    if (isLogin && !isLoading) {
        if (!routeCurrent) {
            router.replace('/');
        } else {
            router.replace({
                pathname: routeCurrent.pathname,
                query: routeCurrent.query,
            });
        }
    }

    if (!isLogin && !isLoading) {
        return <Fragment>{children}</Fragment>;
    }

    return null;
}

export default memo(RequiredLogout);
