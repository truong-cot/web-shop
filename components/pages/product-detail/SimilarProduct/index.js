import React from "react";
import styles from "./SimilarProduct.module.scss";
import ItemProduct from "../../home/Products/ItemProduct";

function SimilarProduct() {
  return (
    <div className={styles.container}>
      <div className="container">
        <div className={styles.main}>
          <div className={styles.title}>
            <h3>Sản phẩm tượng tự</h3>
          </div>

          <div className={styles.groupProduct}>
            <ItemProduct></ItemProduct>
            <ItemProduct></ItemProduct>
            <ItemProduct></ItemProduct>
            <ItemProduct></ItemProduct>
            <ItemProduct></ItemProduct>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SimilarProduct;
