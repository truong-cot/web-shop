import React from "react";
import styles from "./ProductDetail.module.scss";
import Search from "./../../components/pages/home/Search";

import Information from "./../../components/pages/product-detail/Information";
import DescriptionProduct from "./../../components/pages/product-detail/DescriptionProduct";
import ReviewProduct from "./../../components/pages/product-detail/ReviewProduct";
import SimilarProduct from "./../../components/pages/product-detail/SimilarProduct";

function ProductDetail() {
  return (
    <div className={styles.container}>
      <div>
        <Search></Search>
      </div>
      <div>
        <Information></Information>
      </div>
      <div>
        <DescriptionProduct></DescriptionProduct>
      </div>
      <div>
        <ReviewProduct></ReviewProduct>
      </div>
      <div>
        <SimilarProduct></SimilarProduct>
      </div>
    </div>
  );
}

export default ProductDetail;
