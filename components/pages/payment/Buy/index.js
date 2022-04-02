import React from "react";
import styles from "./Buy.module.scss";

import Button from "./../../../control/Button";
import Link from "next/link";

function Buy() {
  return (
    <div className={styles.container}>
      <div className="container">
        <div className={styles.main}>
          <div className={styles.title}>
            <p>
              Nhấn Đặt Hàng đồng nghĩa với việc bạn đồng ý tuân theo
              <Link href="/">
                <a>Điều khoản Duaca</a>
              </Link>
            </p>
          </div>
          <div className={styles.btn}>
            <Button primary rounded product>
              Mua hàng
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Buy;
