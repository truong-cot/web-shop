import React from "react";
import styles from "./Carts.module.scss";
import Layout from "../../components/widgets/Layout";

import Oder from "./../../components/pages/carts/oder/Oder";
import Logo from "../../components/pages/carts/logo/Logo";
import FooterCart from "../../components/pages/carts/footer/FooterCart";

import { useSelector } from "react-redux";
function Carts() {
  // cart
  const { cart } = useSelector((state) => state.cart);

  return (
    <div className={styles.carts}>
      <Logo></Logo>
      <div className="container">
        <div className={styles.cartsContainer}>
          <div className={styles.menuCart}>
            <p className={styles.title}>Sản phẩm</p>
            <div className={styles.des}>
              <p>Size</p>
              <p>Đơn giá</p>
              <p>Số lượng</p>
              <p>Số tiền</p>
              <p>Thao tác</p>
            </div>
          </div>
          <div className={styles.listOder}>
            {cart.map((item) => (
              <Oder key={item._id} data={item}></Oder>
            ))}
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
