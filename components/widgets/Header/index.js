import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useSelector } from 'react-redux';

import logo from './../../../assets/images/logo.svg';
import HeaderLogin from './HeaderLogin/HeaderLogin';
import HeaderNotLogin from './HeaderNotLogin/HeaderNotLogin';
import styles from './Header.module.scss';

function Header() {
    const { isLogin } = useSelector((state) => state.auth);
    const { cart } = useSelector((state) => state.cart);

    return (
        <div className={styles.container}>
            <div className="container">
                <div className={styles.header}>
                    <Link href="/">
                        <a className={styles.link}>
                            <Image src={logo} alt="anh header" layout="fill" />
                        </a>
                    </Link>
                    <ul className={styles.list}>
                        <li className={styles.item}>
                            <Link href="/">
                                <a>Trang chủ</a>
                            </Link>
                        </li>
                        <li className={styles.item}>
                            <Link href="/carts">
                                <a>Đơn hàng</a>
                            </Link>
                            <div className={styles.quantity}>
                                <p>
                                    + <span>{cart?.length}</span>
                                </p>
                            </div>
                        </li>
                        <li className={styles.item}>
                            <Link href="/blogs">
                                <a>Blog</a>
                            </Link>
                        </li>
                    </ul>
                    {isLogin ? <HeaderLogin /> : <HeaderNotLogin />}
                </div>
            </div>
        </div>
    );
}

export default Header;
