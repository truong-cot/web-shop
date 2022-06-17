import React from 'react';
import Link from 'next/link';
import { BsDot } from 'react-icons/bs';

import styles from './NotificationItem.module.scss';

function NotificationItem({ onClose, data }) {
    return (
        <div className={styles.container}>
            <div className={styles.icon}>
                <BsDot></BsDot>
            </div>

            <div className={styles.content}>
                <div className={styles.title} onClick={onClose}>
                    <Link href="/">
                        <a>
                            <p>{data.endow}</p>
                        </a>
                    </Link>
                </div>

                <div className={styles.description}>
                    <p>{data.payment}</p>
                </div>

                <div className={styles.time}>
                    <p>{data.time} minutes ago</p>
                </div>
            </div>
        </div>
    );
}

export default NotificationItem;
