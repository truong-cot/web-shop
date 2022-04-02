import React from "react";
import styles from "./Carts.module.scss";
import Layout from "../../components/widgets/Layout";

import Oder from "./Oder.js";
import Logo from "./Logo.js";
import FooterCart from "./FooterCart";

function Carts() {
  return (
    <div>
      <Logo></Logo>
      <div className={styles.listOder}>
        <div className="container">
          <Oder></Oder>
          <Oder></Oder>
          <Oder></Oder>
          <Oder></Oder>
          <Oder></Oder>
          <Oder></Oder>
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
