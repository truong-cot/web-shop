import React from "react";
import styles from "./Product.module.scss";
import imageProduct from "./../../../../assets/images/products/ItemProduct.png";

import Link from "next/link";
import { AiFillStar, AiOutlineShoppingCart } from "react-icons/ai";

function Product() {
  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <div className={styles.img}>
          <Link href="/">
            <a>
              <img src={imageProduct.src} alt="anh san pham" />
            </a>
          </Link>
        </div>

        <div className={styles.description}>
          <div className={styles.name}>
            <p>Quần áo nam</p>
          </div>

          <div className={styles.info}>
            <div className={styles.star}>
              <div className={styles.icon}>
                <AiFillStar></AiFillStar>
              </div>
              <span>4.5</span>
            </div>
            <div className={styles.cart}>
              <div className={styles.icon}>
                <AiOutlineShoppingCart></AiOutlineShoppingCart>
              </div>
              <span>Đã bán 226</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
