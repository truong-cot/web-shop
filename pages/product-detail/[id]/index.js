import React, {useEffect, useState} from "react";
import styles from "./ProductDetail.module.scss";
import Search from "../../../components/pages/home/Search";

import Information from "../../../components/pages/product-detail/Information";
import DescriptionProduct from "../../../components/pages/product-detail/DescriptionProduct";
import ReviewProduct from "../../../components/pages/product-detail/ReviewProduct";
// import SimilarProduct from "../../../components/pages/product-detail/SimilarProduct";
import {useRouter} from 'next/router'
import productAPI from "../../../api/product"


function ProductDetail() {

  const router = useRouter()
  const [product, setProduct] = useState({})

  useEffect(() => {
    const getProduct = async () => {
      const res = await productAPI.getProduct(router.query.id)
      setProduct(res.payload)

    }
    getProduct()
  }, [])


  console.log(product)



  return (
    <div className={styles.container}>
      <div>
        <Search></Search>
      </div>
      <div>
        <Information data={product}></Information>
      </div>
      <div>
        <DescriptionProduct data={product}></DescriptionProduct>
      </div>
      <div>
        <ReviewProduct></ReviewProduct>
      </div>
      <div>
        {/* <SimilarProduct></SimilarProduct> */}
      </div>
    </div>
  );
}

export default ProductDetail;
