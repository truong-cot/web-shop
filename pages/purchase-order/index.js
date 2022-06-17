import React from 'react';
import styles from './PurchaseOrder.module.scss';
import NavProfile from '../../components/pages/profile/NavProfile';
import RequireLogin from '../../components/proteced/RequireLogin';
import PurchaseOrderItem from './../../components/pages/profile/PurchaseOrderItem';

function PurchaseOrder() {
    return (
        <RequireLogin>
            <div className={styles.container}>
                <div className="container">
                    <div className={styles.main}>
                        <NavProfile />
                        <div>
                            <div className={styles.header}>
                                <ul className={styles.list}>
                                    <li className={styles.item}>Tất cả</li>
                                    <li className={styles.item}>Chờ giao</li>
                                    <li className={styles.item}>Đã giao</li>
                                    <li className={styles.item}>Đã hủy</li>
                                </ul>
                            </div>
                            <div className={styles.content}>
                                <PurchaseOrderItem />
                                <PurchaseOrderItem />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </RequireLogin>
    );
}

export default PurchaseOrder;
