import React from "react";
import styles from "./Footer.module.scss";
import Button from "../../../control/Button";
import Link from "next/link";

import { useSelector } from "react-redux";

function FooterCart() {
  // total price
  const { cart } = useSelector((state) => state.cart);

  return (
    <div className={styles.footerCart}>
      <div className="container">
        <div className={styles.container}>
          <p className={styles.title}>
            Tất cả (<span>{cart.length}</span> sản phẩm)
          </p>
          <div className={styles.totalPrice}>
            <p className={styles.price}>
              đ<span>1.500.000</span>
            </p>
            <div className={styles.btn}>
              <Link href="/payment">
                <Button rounded primary product>
                  Mua hàng
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FooterCart;
