import React from 'react';
import styles from './TransactionHistoryEmpty.module.scss';

function TransactionHistoryEmpty() {
    return (
        <div className={styles.container}>
            <div className={styles.title}>Bạn chưa có giao dịch nào!</div>
            <div className={styles.img}>
                <img
                    src="https://www.seekpng.com/png/detail/117-1170538_404-your-cart-is-empty.png"
                    alt="anh gio hang trong"
                />
            </div>
        </div>
    );
}

export default TransactionHistoryEmpty;
