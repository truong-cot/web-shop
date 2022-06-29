import React from 'react';
import styles from './ContentProfile.module.scss';

function ContentProfile({ children }) {
  const user = JSON.parse(localStorage.getItem("user"));

    return <div className={styles.container}>
        {children}
    </div>;

{/* <h2>Thông tin khách hàng</h2>
<p>Tên đăng nhập: {user?.username}</p>
<p>Email: {user?.email}</p> */}
}

export default ContentProfile;
