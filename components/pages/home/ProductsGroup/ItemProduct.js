import React from "react";
import styles from "./Products.module.scss";
import imgItemProduct from "../../../../assets/images/products/ItemProduct.png";
import { BsFillStarFill, BsFillCartCheckFill } from "react-icons/bs";
import Button from "../../../control/Button";
import imgBtnAddCart from "../../../../assets/images/products/btnAddCart.png";
import Link from "next/link";

function ItemProduct() {
  return (
    <div className={styles.itemMain}>
      <div className={styles.img}>
        <Link href="/productDetail" className={styles.img}>
          <a>
            <img src={imgItemProduct.src} alt="anh san pham" />
          </a>
        </Link>
      </div>

      <div className={styles.title}>
        <Link href="/productDetail">
          <a>Áo phông trắng mua hè</a>
        </Link>
      </div>

      <div className={styles.description}>
        <div className={styles.star}>
          <div className={styles.icon}>
            <BsFillStarFill />
          </div>
          <span>4.5</span>
        </div>

        <div className={styles.cart}>
          <div className={styles.icon}>
            <BsFillCartCheckFill />
          </div>
          <span>Đã bán 226</span>
        </div>
      </div>

      <div className={styles.sale}>
        <del>350.000đ</del>
        <span>-37.5%</span>
      </div>

      <div className={styles.price}>
        <h5>300.000đ</h5>
        <div className={styles.btnProduct}>
          <Button>
            <img src={imgBtnAddCart.src} alt="anh btn" />
          </Button>
        </div>
      </div>
    </div>
  );
}

export default ItemProduct;
