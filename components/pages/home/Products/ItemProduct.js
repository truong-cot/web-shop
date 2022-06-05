import React from "react";
import styles from "./Products.module.scss";
import { BsFillStarFill, BsFillCartCheckFill } from "react-icons/bs";
import Button from "../../../control/Button";
import imgBtnAddCart from "../../../../assets/images/products/btnAddCart.png";
import Link from "next/link";

import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../../../redux/actions/cart";

function ItemProduct({ data }) {
  const newCount = data?.price - (data?.discount * data?.price) / 100;

  // cart
  const dispatch = useDispatch();
  const listCart = useSelector((state) => state.cart);

  // const handleAddToCart = () => {
  //   dispatch(addToCart(data.id));
  // };

  console.log(listCart);

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
          <Button onClick={() => dispatch(addToCart(data.id))}>
            <img src={imgBtnAddCart.src} alt="anh btn" />
          </Button>
        </div>
      </div>
    </div>
  );
}

export default ItemProduct;
