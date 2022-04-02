import React from "react";
import styles from "./MethodPay.module.scss";

import Link from "next/link";

function MethodPay() {
  return (
    <div className={styles.container}>
      <div className="container">
        <div className={styles.main}>
          <div className={styles.title}>
            <p>Phương thức thanh toán</p>
          </div>
          <div className={styles.description}>
            <p>Thanh toán khi nhận hàng</p>
          </div>
          <div className={styles.link}>
            <Link href="/">
              <a>Thay đổi</a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MethodPay;
