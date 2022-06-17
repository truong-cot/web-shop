import React from 'react';
import Link from 'next/link';
import { useDispatch } from 'react-redux';
import { FiUser } from 'react-icons/fi';
import { AiOutlineLogout } from 'react-icons/ai';

import { logout } from './../../../../../redux/actions/auth';
import styles from './LogOut.module.scss';

function LogOut() {
    const dispatch = useDispatch();

    const handlerLogOut = () => {
        dispatch(logout());
    };

    return (
        <div className={styles.container}>
            <Link href="/information-user">
                <a className={styles.account}>
                    <div className={styles.icon}>
                        <FiUser></FiUser>
                    </div>
                    <div className={styles.content}>
                        <p>Tài khoản</p>
                    </div>
                </a>
            </Link>

            <Link href="/">
                <a className={styles.account}>
                    <div className={styles.icon}>
                        <AiOutlineLogout></AiOutlineLogout>
                    </div>
                    <div className={styles.content} onClick={handlerLogOut}>
                        <p>Đăng xuất</p>
                    </div>
                </a>
            </Link>
        </div>
    );
}

export default LogOut;
