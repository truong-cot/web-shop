import styles from "./Oder.module.scss";
import logo from "./../../../../assets/images/products/ItemProduct.png";
import React from "react";

function Oder() {
  return (
    <div className={styles.oder}>
      <div className={styles.container}>
        <div className={styles.content}>
          <input type="checkbox" />
          <div className={styles.img}>
            <img src={logo.src} alt="anh don hang" />
          </div>
          <p className={styles.des}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry
          </p>
        </div>

        <div className={styles.infomation}>
          <span className={styles.size}>
            <p>M</p>
          </span>
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
    </div>
  );
}

export default Oder;
