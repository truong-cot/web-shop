import React from "react";
import styles from "./CartEmpty.module.scss";
import Button from "../../../../components/control/Button";
import Link from "next/link";

function CartEmpty() {
  return (
    <div className={styles.container}>
      <div className={styles.img}>
        <img
          src="https://bengo.vn/static/version1650994791/frontend/MageBig/martfury_layout01/vi_VN/images/empty-cart.svg"
          alt="anh gio hang trong"
        />
      </div>
      <div className={styles.title}>
        <p>Bạn chưa có sản phẩm nào trong giỏ hàng</p>
      </div>
      <div className={styles.btn}>
        <Link href="/">
          <Button primary rounded product>
            Quay lại trang chủ
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default CartEmpty;
