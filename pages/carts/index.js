import React from "react";
import styles from "./Carts.module.scss";
import Layout from "../../components/widgets/Layout";

import Oder from "./../../components/pages/carts/Oder";
import Logo from "./../../components/pages/carts/Logo";
import FooterCart from "./../../components/pages/carts/FooterCart";

function Carts() {
  return (
    <div className={styles.carts}>
      <Logo></Logo>
      <div className="container">
        <div className={styles.cartsContainer}>
          <div className={styles.menuCart}>
            <p className={styles.title}>Sản phẩm</p>
            <div className={styles.des}>
              <p>Số lượng</p>
              <p>Số tiền</p>
              <p>Thao tác</p>
            </div>
          </div>
          <div className={styles.listOder}>
            <Oder></Oder>
            <Oder></Oder>
            <Oder></Oder>
            <Oder></Oder>
            <Oder></Oder>
          </div>
        </div>
      </div>
      <FooterCart></FooterCart>
    </div>
  );
}

export default Carts;

Carts.layout = () => {
  return (
    <Layout isShowFooter={false} isShowHeader={true}>
      <Carts />
    </Layout>
  );
};
