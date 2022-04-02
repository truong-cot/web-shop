import styles from "./Carts.module.scss";
import logo from "./../../../assets/images/banner1.svg";
import React from "react";

function Oder() {
  return (
    <div className={styles.oder}>
      <div className={styles.container}>
        <input type="checkbox" />
        <div className={styles.img}>
          <img src={logo.src} alt="anh don hang" />
        </div>
        <p className={styles.des}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry
        </p>
        <span className={styles.price}>
          đ<p>250.000</p>
        </span>
        <div className={styles.control}>
          <button>-</button>
          <span>2</span>
          <button>+</button>
        </div>
        <span className={styles.price}>
          đ<p>250.000</p>
        </span>
        <div className={styles.btnDelete}>
          <button>Xoá</button>
        </div>
      </div>
    </div>
  );
}

export default Oder;
