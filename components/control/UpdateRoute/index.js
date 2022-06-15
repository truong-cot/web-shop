import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import { updateRoute } from '../../../redux/actions/user';

function UpdateRoute() {
    const dispatch = useDispatch();
    const router = useRouter();
    useEffect(() => {
        if (router.pathname !== '/login' && router.pathname !== '/signup') {
            dispatch(updateRoute(router));
        }
    }, [dispatch, router]);
    return null;
}

export default UpdateRoute;
