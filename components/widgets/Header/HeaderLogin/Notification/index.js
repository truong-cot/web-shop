import React from "react";
import styles from "./Notification.module.scss";

import NotificationItem from "./../NotificationItem";

function Notification({ onClose }) {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <p>
          Bạn có <span>3</span> thông báo
        </p>
      </div>
      <div className={styles.main}>
        <div className={styles.item}>
          <NotificationItem onClose={onClose}></NotificationItem>
        </div>
        <div className={styles.item}>
          <NotificationItem></NotificationItem>
        </div>
        <div className={styles.item}>
          <NotificationItem></NotificationItem>
        </div>
        <div className={styles.item}>
          <NotificationItem></NotificationItem>
        </div>
        <div className={styles.item}>
          <NotificationItem></NotificationItem>
        </div>
      </div>
    </div>
  );
}

export default Notification;
