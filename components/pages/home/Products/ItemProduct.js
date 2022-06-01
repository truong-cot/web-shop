import React from "react";
import styles from "./Products.module.scss";
import imgItemProduct from "../../../../assets/images/products/ItemProduct.png";
import { BsFillStarFill, BsFillCartCheckFill } from "react-icons/bs";
import Button from "../../../control/Button";
import imgBtnAddCart from "../../../../assets/images/products/btnAddCart.png";
import Link from "next/link";

function ItemProduct({data}) {

  const newCount = (data?.price - data?.discount * data?.price / 100)

  return (
    <div className={styles.itemMain}>
      <div className={styles.img}>
        <Link href={`/product-detail/${data?._id}`}>
          <a>
            <img src={data?.img} alt="anh san pham" />
          </a>
        </Link>
      </div>

      <div className={styles.title}>
        <Link href="/product-detail">
          <a>{data?.title}</a>
        </Link>
      </div>

      <div className={styles.description}>
        <div className={styles.star}>
          <div className={styles.icon}>
            <BsFillStarFill />
          </div>
          <span>{data?.rate}</span>
        </div>

        <div className={styles.cart}>
          <div className={styles.icon}>
            <BsFillCartCheckFill />
          </div>
          <span>Đã bán {data?.sold}</span>
        </div>
      </div>

      <div className={styles.sale}>
        <del>{data?.price}$</del>
        <span>-{data?.discount}%</span>
      </div>

      <div className={styles.price}>
        <h5>{newCount}$</h5>
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
