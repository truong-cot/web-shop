import React from "react";
import styles from "./NotificationItem.module.scss";
import { BsDot } from "react-icons/bs";
import Link from "next/link";

function NotificationItem({ onClose }) {
  return (
    <div className={styles.container}>
      <div className={styles.icon}>
        <BsDot></BsDot>
      </div>

      <div className={styles.content}>
        <div className={styles.title} onClick={onClose}>
          <Link href="/">
            <a>
              <p>Ưu đãi 20% tất cả các đơn hàng trong hôm nay</p>
            </a>
          </Link>
        </div>

        <div className={styles.description}>
          <p>Thanh toán qua ví DUACA</p>
        </div>

        <div className={styles.time}>
          <p>2 minutes ago</p>
        </div>
      </div>
    </div>
  );
}

export default NotificationItem;
