import React from "react";
import styles from "./Sale.module.scss";

import Link from "next/link";

function Sale() {
  return (
    <div className={styles.container}>
      <div className="container">
        <div className={styles.main}>
          <div className={styles.title}>
            <p>Khuyến mãi</p>
          </div>
          <div className={styles.link}>
            <Link href="/">
              <a>Chọn voucher</a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sale;
