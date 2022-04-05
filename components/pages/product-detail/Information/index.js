import React from "react";
import styles from "./Information.module.scss";

import { BsFillStarFill, BsCartCheck } from "react-icons/bs";
import Button from "../../../control/Button";

import imageProduct from "./../../../../assets/images/product-detail/imageProduct.png";

function Information() {
  return (
    <div className={styles.container}>
      <div className="container">
        <div className={styles.main}>
          <div className={styles.image}>
            <div className={styles.imageInfo}>
              <img src={imageProduct.src} alt="anh chi tiet san pham" />
            </div>

            <div className={styles.item}>
              <img src={imageProduct.src} alt="anh chi tiet san pham" />
            </div>

            <div className={styles.item}>
              <img src={imageProduct.src} alt="anh chi tiet san pham" />
            </div>

            <div className={styles.item}>
              <img src={imageProduct.src} alt="anh chi tiet san pham" />
            </div>

            <div className={styles.item}>
              <img src={imageProduct.src} alt="anh chi tiet san pham" />
            </div>
          </div>

          <div className={styles.informaiton}>
            <div className={styles.title}>
              <h4>Quần áo mùa hè</h4>
            </div>
            <div className={styles.description}>
              <div className={styles.star}>
                <div className={styles.icon}>
                  <BsFillStarFill></BsFillStarFill>
                </div>
                <div className={styles.text}>
                  <span>4.5</span>
                </div>
              </div>

              <div className={styles.soldOut}>
                <div className={styles.icon}>
                  <BsCartCheck></BsCartCheck>
                </div>
                <div className={styles.text}>
                  <span>Đã bán 226</span>
                </div>
              </div>
            </div>

            <div className={styles.price}>
              <del className={styles.prevPrice}>620.000đ</del>
              <h4 className={styles.beforePrice}>620.000đ</h4>
              <p className={styles.sale}>
                -<span>37.5%</span>
              </p>
            </div>

            <div className={styles.sizes}>
              <div className={styles.title}>
                <p>Size</p>
              </div>
              <div className={styles.groupSize}>
                <button>S</button>
                <button>M</button>
                <button>L</button>
                <button>XL</button>
              </div>
            </div>

            <div className={styles.quantity}>
              <p className={styles.title}>Số lượng</p>
              <div className={styles.groupBtn}>
                <button>-</button>
                <span>2</span>
                <button>+</button>
              </div>
            </div>

            <div className={styles.control}>
              <Button rounded productDetail search>
                Thêm vào giỏ hàng
              </Button>
              <Button primary rounded productDetail>
                Mua ngay
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Information;
