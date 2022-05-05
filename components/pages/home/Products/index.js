import React from "react";
import styles from "./Products.module.scss";
import ItemProduct from "./ItemProduct";
import Button from "../../../control/Button";

import Link from "next/link";

function Products() {
  return (
    <div className={styles.container}>
      <div className={styles.productsMain}>
        <div className="container">
          <div className={styles.productsItem}>
            <h3 className={styles.title}>SẢN PHẨM CỦA DUCA</h3>
            <div className={styles.products}>
              <ItemProduct></ItemProduct>
              <ItemProduct></ItemProduct>
              <ItemProduct></ItemProduct>
              <ItemProduct></ItemProduct>
              <ItemProduct></ItemProduct>
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
              <Link href="/detail-products">
                <a>
                  <Button rounded primary product>
                    Xem thêm
                  </Button>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Products;
