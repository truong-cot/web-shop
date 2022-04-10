import React from "react";
import styles from "./PaymentSuccess.module.scss";
import imgPaymentSuccess from "./../../assets/images/paymentSuccess.png";
import Link from "next/link";
import Button from "./../../components/control/Button";

function PaymentSuccess() {
  return (
    <div className={styles.container}>
      <div className="container">
        <div className={styles.main}>
          <div className={styles.img}>
            <img src={imgPaymentSuccess.src} alt="anh payment success" />
          </div>

          <div className={styles.title}>
            <h3>Thành công!</h3>
          </div>

          <div className={styles.description}>
            <p>
              Thanh toán của bạn thành công, hãy theo dõi trong đơn hàng để xem
              hành trình vận chuyển đơn hàng của bạn nhé!
            </p>
          </div>

          <div className={styles.btn}>
            <Link href="/">
              <Button rounded>
                Quay về trang chủ (<span>5</span>s)
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PaymentSuccess;
