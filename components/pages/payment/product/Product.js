import React from "react";
import styles from "./Product.module.scss";

import img from "./../../../../assets/images/products/ItemProduct.png";

function Product() {
  return (
    <div className="container">
      <div className={styles.product}>
        <div className={styles.title}>
          <div className={styles.img}>
            <img src={img.src} alt="anh san pham" />
          </div>
          <p className={styles.des}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry
          </p>
        </div>

        <p className={styles.size}>
          <span>M</span>
        </p>
        <p className={styles.price}>
          đ<span>200.000</span>
        </p>
        <p className={styles.quantity}>3</p>
        <p className={styles.totalPrice}>
          đ<span>400.000</span>
        </p>
      </div>
    </div>
  );
}

export default Product;
