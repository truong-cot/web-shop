import React from "react";
import Link from "next/link";
import PurchaseOrderProductItem from "./PurchaseOrderProductItem";
import styles from "./PurchaseOrderItem.module.scss";

import Button from "./../../../control/Button";

function PurchaseOrderItem() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <p>Loại sản phẩm</p>
        <div className={styles.status}>
          <p>Đang giao</p>
        </div>
      </div>

      <div className={styles.product}>
        <PurchaseOrderProductItem />
        <PurchaseOrderProductItem />
      </div>

      <div className={styles.detail}>
        <Link href="#">
          <p>xem chi tiết</p>
        </Link>
      </div>

      <div className={styles.line}></div>

      <div className={styles.footer}>
        <div className={styles.link}>
          <Link href="#">
            <Button product search rounded>
              Mua lại
            </Button>
          </Link>
        </div>

        <div className={styles.totalPrice}>
          <p>Tổng tiền: </p>
          <span>đ</span>
          <span>200000</span>
        </div>
      </div>
    </div>
  );
}

export default PurchaseOrderItem;
