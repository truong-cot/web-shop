import React from "react";
import { useState } from "react";
import styles from "./MethodPay.module.scss";
import Button from "./../../../control/Button";

function MethodPay() {
  const methods = ["Thanh toán khi nhận hàng", "Chuyển khoản", "Ví DUCA"];

  const [index, setIndex] = useState(1);
  const [method, setMethod] = useState(methods[0]);

  const handleSetMethod = () => {
    setIndex(index + 1);

    if (index >= 2) {
      setIndex(0);
    }
    setMethod(methods[index]);
  };

  return (
    <div className={styles.container}>
      <div className="container">
        <div className={styles.main}>
          <div className={styles.title}>
            <p>Phương thức thanh toán</p>
          </div>
          <div className={styles.description}>
            <p>{method}</p>
          </div>
          <div className={styles.btn}>
            <Button onClick={handleSetMethod}>Thay đổi</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MethodPay;
