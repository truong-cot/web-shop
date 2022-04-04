import React from "react";
import styles from "./AllProduct.module.scss";
import Banner from "./../../components/pages/home/Banner";
import Search from "./../../components/pages/home/Search";
import ItemProduct from "../../components/pages/home/Products/ItemProduct";

function AllProduct() {
  return (
    <div className={styles.container}>
      <div className={styles.banner}>
        <Banner></Banner>
      </div>
      <div className={styles.search}>
        <Search></Search>
      </div>
      <div className="container">
        <div className={styles.main}>
          <div className={styles.title}>
            <h3>THỰC PHẨM</h3>
          </div>

          <div className={styles.products}>
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

export default AllProduct;
