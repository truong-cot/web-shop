import React from 'react';
import Link from 'next/link';
// import avatar from './../../../../assets/images/avatar.svg';
import styles from './NavProfile.module.scss';

function NavProfile() {
    const user = JSON.parse(localStorage.getItem('user'));

    return (
        <div className={styles.container}>
            <div className={styles.user}>
                <div className={styles.img}>
                    <img src={user?.profilePicture} alt="avatar" />
                </div>
                <div className={styles.info}>
                    <h4 className={styles.account}>Tên khách hàng</h4>
                    <p className={styles.name}>{user?.username}</p>
                </div>
            </div>

            <ul className={styles.nav}>
                <li className={styles.item}>
                    <Link href="/information-user">
                        <a>Hồ sơ cá nhân</a>
                    </Link>
                </li>
                <li className={styles.item}>
                    <Link href="/transaction-history">
                        <a>Lịch sử giao dịch</a>
                    </Link>
                </li>
                <li className={styles.item}>
                    <Link href="/purchase-order">
                        <a>Đơn mua</a>
                    </Link>
                </li>
                <li className={styles.item}>
                    <Link href="/question">
                        <a>Câu hỏi thường gặp</a>
                    </Link>
                </li>
                <li className={styles.item}>
                    <Link href="/feedback">
                        <a>Góp ý</a>
                    </Link>
                </li>
            </ul>
        </div>
    );
}

export default NavProfile;
