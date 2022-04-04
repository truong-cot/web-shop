import React from "react";
import Address from "../../components/pages/payment/address/Address";
import Product from "../../components/pages/payment/product/Product";
import Note from "./../../components/pages/payment/Note";
import Sale from "./../../components/pages/payment/Sale";
import MethodPay from "./../../components/pages/payment/MethodPay";
import TotalPay from "./../../components/pages/payment/TotalPay";
import Buy from "./../../components/pages/payment/Buy";

import styles from "./Payment.module.scss";

function Payment() {
  return (
    <div>
      <div>
        <Address></Address>
      </div>
      <div>
        <div className="container">
          <div className={styles.rowTitle}>
            <p>Sản phẩm</p>
            <p>Size</p>
            <p>Đơn giá</p>
            <p>Số lượng</p>
            <p>Thành tiền</p>
          </div>
        </div>
        <div className={styles.products}>
          <Product></Product>
          <Product></Product>
          <Product></Product>
          <Product></Product>
          <Product></Product>
        </div>
        <div>
          <Note></Note>
        </div>
        <div>
          <Sale></Sale>
        </div>
        <div>
          <MethodPay></MethodPay>
        </div>
        <div>
          <TotalPay></TotalPay>
        </div>
        <div>
          <Buy></Buy>
        </div>
      </div>
    </div>
  );
}

export default Payment;
