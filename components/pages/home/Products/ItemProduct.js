import React from "react";
import styles from "./Products.module.scss";
import { BsFillStarFill, BsFillCartCheckFill } from "react-icons/bs";
import Button from "../../../control/Button";
import imgBtnAddCart from "../../../../assets/images/products/btnAddCart.png";
import Link from "next/link";
import { Image } from "next/image";

function ItemProduct({ product }) {
  return (
    <div className={styles.itemMain}>
      <div className={styles.img}>
        <Link href="/product-detail">
          <a>
            <Image src={product.img} alt="anh san pham" layout="fill" />
          </a>
        </Link>
      </div>

      <div className={styles.title}>
        <Link href="/product-detail">
          <a>{product.title}</a>
        </Link>
      </div>

      <div className={styles.description}>
        <div className={styles.star}>
          <div className={styles.icon}>
            <BsFillStarFill />
          </div>
          <span>{product.sold}</span>
        </div>

        <div className={styles.cart}>
          <div className={styles.icon}>
            <BsFillCartCheckFill />
          </div>
          <span>
            Đã bán <span>{product.rate}</span>
          </span>
        </div>
      </div>

      <div className={styles.sale}>
        <del>350.000đ</del>
        <span>
          {product.discount}
          <span>%</span>
        </span>
      </div>

      <div className={styles.price}>
        <h5>{product.price}</h5>
        <div className={styles.btnProduct}>
          <Link href="/product-detail">
            <a>
              <Button>
                <img src={imgBtnAddCart.src} alt="anh btn" />
              </Button>
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ItemProduct;
