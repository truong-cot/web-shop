import React from "react";
import styles from "./Carts.module.scss";
import Button from "./../../components/control/Button";

function FooterCart() {
  return (
    <div className={styles.footerCart}>
      <div className="container">
        <div className={styles.container}>
          <input type="checkbox" />
          <p className={styles.title}>
            Chọn tất cả (<span>5</span> sản phẩm)
          </p>

          <p className={styles.totalPay}>
            Tổng thanh toán (<span>5</span> sản phẩm)
          </p>

          <p className={styles.price}>
            đ<span>1.500.000</span>
          </p>

          <div className={styles.btn}>
            <Button rounded primary product>
              Mua hàng
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FooterCart;
