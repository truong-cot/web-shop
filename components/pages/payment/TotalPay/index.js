import React from "react";
import styles from "./TotalPay.module.scss";

function TotalPay() {
  return (
    <div className={styles.container}>
      <div className="container">
        <div className={styles.main}>
          <div></div>
          <div className={styles.title}>
            <p>Tổng tiền hàng</p>
            <p>Phí vận chuyển</p>
            <p>Voucher</p>
            <p>Tổng thanh toán:</p>
          </div>
          <div className={styles.price}>
            <p>
              đ<span>1.600.000</span>đ
            </p>
            <p>
              đ<span>20.000</span>
            </p>
            <p>
              -đ<span>35.000</span>đ
            </p>
            <p>
              đ<span>1.585.000</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TotalPay;
