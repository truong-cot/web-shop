import React from 'react';

import NotificationItem from './../NotificationItem';
import styles from './Notification.module.scss';

function Notification({ onClose }) {
    // Fake data thông báo
    const data = [
        {
            endow: 'Ưu đãi 20% tất cả các đơn hàng trong hôm nay',
            payment: 'Thanh toán qua ví DUACA',
            time: 2,
        },
        {
            endow: 'Ưu đãi 20% tất cả các đơn hàng trong hôm nay',
            payment: 'Thanh toán qua ví DUACA',
            time: 2,
        },
        {
            endow: 'Ưu đãi 20% tất cả các đơn hàng trong hôm nay',
            payment: 'Thanh toán qua ví DUACA',
            time: 2,
        },
        {
            endow: 'Ưu đãi 20% tất cả các đơn hàng trong hôm nay',
            payment: 'Thanh toán qua ví DUACA',
            time: 2,
        },
    ];

    return (
        <div className={styles.container}>
            <div className={styles.title}>
                <p>
                    Bạn có <span>{data.length}</span> thông báo
                </p>
            </div>
            <div className={styles.main}>
                <div className={styles.item}>
                    {data.map((item, index) => (
                        <NotificationItem key={index} data={item} onClose={onClose}></NotificationItem>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Notification;
