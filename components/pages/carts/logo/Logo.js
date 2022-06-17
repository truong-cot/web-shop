import React from 'react';

import styles from './Logo.module.scss';

function Logo() {
    return (
        <div className="container">
            <div className={styles.logo}>
                <p className={styles.title}>Đơn hàng</p>
            </div>
        </div>
    );
}

export default Logo;
