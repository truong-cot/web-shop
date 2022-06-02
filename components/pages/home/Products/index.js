import React, { useState, useEffect } from "react";
import styles from "./Products.module.scss";
import ItemProduct from "./ItemProduct";
import Button from "../../../control/Button";

import Link from "next/link";
import productAPI from "../../../../api/product";

function Products() {
  const [data, setData] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const response = await productAPI.getAllProducts();
        if (response.status === "success") {
          setData(response.payload);
        }
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  console.log(data);

  return (
    <div className={styles.container}>
      <div className={styles.productsMain}>
        <div className="container">
          <div className={styles.productsItem}>
            <h3 className={styles.title}>SẢN PHẨM CỦA DUCA</h3>
            <div className={styles.products}>
              {data.map((product) => (
                <ItemProduct product={product} />
              ))}
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
