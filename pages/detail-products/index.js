import React from "react";
import styles from "./AllProduct.module.scss";
import Banner from "../../components/pages/home/Banner";
import Search from "../../components/pages/home/Search";
import Button from "./../../components/control/Button";
import ItemProduct from "../../components/pages/home/Products/ItemProduct";
import { FaFilter } from "react-icons/fa";

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
            <h3>QUẦN ÁO</h3>
            <div className={styles.filter}>
              <div className={styles.filterParent}>
                <div className={styles.icon}>
                  <FaFilter />
                </div>
                Lọc
              </div>
              <div className={styles.filterItem}>
                <Button filter filterActive>
                  Quần
                </Button>
              </div>
              <div className={styles.filterItem}>
                <Button filter>Áo</Button>
              </div>
              <div className={styles.filterItem}>
                <Button filter>Phụ kiện</Button>
              </div>
              <div className={styles.filterItem}>
                <Button filter>Mùa đông</Button>
              </div>
              <div className={styles.filterItem}>
                <Button filter>Mùa hè</Button>
              </div>
            </div>
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
