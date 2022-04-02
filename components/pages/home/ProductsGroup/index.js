import React from "react";
import styles from "./Products.module.scss";
import ItemProduct from "./ItemProduct";
import Button from "../../../control/Button";

function Products() {
  return (
    <div className={styles.container}>
      <div className={styles.productsMain}>
        <div className="container">
          <div className={styles.productsItem}>
            <h3 className={styles.title}>ĐỒ BƠI</h3>
            <div className={styles.products}>
              <ItemProduct></ItemProduct>
              <ItemProduct></ItemProduct>
              <ItemProduct></ItemProduct>
              <ItemProduct></ItemProduct>
              <ItemProduct></ItemProduct>
              <ItemProduct></ItemProduct>
              <ItemProduct></ItemProduct>
              <ItemProduct></ItemProduct>
            </div>
            <div className={styles.btn}>
              <Button rounded primary product>
                Xem tất cả
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.productsMain}>
        <div className="container">
          <div className={styles.productsItem}>
            <h3 className={styles.title}>ĐỒ BƠI</h3>
            <div className={styles.products}>
              <ItemProduct></ItemProduct>
              <ItemProduct></ItemProduct>
              <ItemProduct></ItemProduct>
              <ItemProduct></ItemProduct>
              <ItemProduct></ItemProduct>
              <ItemProduct></ItemProduct>
              <ItemProduct></ItemProduct>
              <ItemProduct></ItemProduct>
            </div>
            <div className={styles.btn}>
              <Button rounded primary product>
                Xem tất cả
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.productsMain}>
        <div className="container">
          <div className={styles.productsItem}>
            <h3 className={styles.title}>ĐỒ BƠI</h3>
            <div className={styles.products}>
              <ItemProduct></ItemProduct>
              <ItemProduct></ItemProduct>
              <ItemProduct></ItemProduct>
              <ItemProduct></ItemProduct>
              <ItemProduct></ItemProduct>
              <ItemProduct></ItemProduct>
              <ItemProduct></ItemProduct>
              <ItemProduct></ItemProduct>
            </div>
            <div className={styles.btn}>
              <Button rounded primary product>
                Xem tất cả
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.productsMain}>
        <div className="container">
          <div className={styles.productsItem}>
            <h3 className={styles.title}>ĐỒ BƠI</h3>
            <div className={styles.products}>
              <ItemProduct></ItemProduct>
              <ItemProduct></ItemProduct>
              <ItemProduct></ItemProduct>
              <ItemProduct></ItemProduct>
              <ItemProduct></ItemProduct>
              <ItemProduct></ItemProduct>
              <ItemProduct></ItemProduct>
              <ItemProduct></ItemProduct>
            </div>
            <div className={styles.btn}>
              <Button rounded primary product>
                Xem tất cả
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.productsMain}>
        <div className="container">
          <div className={styles.productsItem}>
            <h3 className={styles.title}>ĐỒ BƠI</h3>
            <div className={styles.products}>
              <ItemProduct></ItemProduct>
              <ItemProduct></ItemProduct>
              <ItemProduct></ItemProduct>
              <ItemProduct></ItemProduct>
              <ItemProduct></ItemProduct>
              <ItemProduct></ItemProduct>
              <ItemProduct></ItemProduct>
              <ItemProduct></ItemProduct>
            </div>
            <div className={styles.btn}>
              <Button rounded primary product>
                Xem tất cả
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Products;
