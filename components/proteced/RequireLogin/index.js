import { Fragment } from 'react';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';

function RequireLogin({ children }) {
    const router = useRouter();
    const { isLogin, isLoading } = useSelector((state) => state.auth);

    /********** redirect home when user login  **********/

    if (!isLogin && !isLoading) {
        router.replace('/login');
    }

    if (isLogin && !isLoading) {
        return <Fragment>{children}</Fragment>;
    }

    return null;
}

export default RequireLogin;
