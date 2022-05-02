import React from "react";
import styles from "./PurchaseOrder.module.scss";
import NavProfile from "./../../components/pages/profile/NavProfile";
import ContentProfile from "./../../components/pages/profile/ContentProfile";

function PurchaseOrder() {
  return (
    <div className={styles.container}>
      <div className="container">
        <div className={styles.main}>
          <NavProfile />
          <ContentProfile>day la trang don mua</ContentProfile>
        </div>
      </div>
    </div>
  );
}

export default PurchaseOrder;
