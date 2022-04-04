import React from "react";
import styles from "./Address.module.scss";

import Button from "./../../../control/Button";

import { FaMapMarkerAlt } from "react-icons/fa";

function Address() {
  return (
    <div className={styles.payment}>
      <div className="container">
        <div className={styles.paymentContainer}>
          <div className={styles.address}>
            <div className={styles.title}>
              <div className={styles.icon}>
                <FaMapMarkerAlt />
              </div>
              <p>Địa chỉ nhận hàng</p>
            </div>
            <p className={styles.info}>Lê Hạnh - 039516888</p>
            <p className={styles.add}>
              Chung cư C14 Bắc Hà, Tố Hữu - Trung Văn
            </p>
            <span className={styles.des}>
              Tố Hữu, Phường Trung Văn, Quận Nam Từ Liêm, Hà Nội
            </span>
            <p className={styles.time}>
              Thời gian nhận hàng: 11:30 - 21/01/2022
            </p>
          </div>

          <div className={styles.btn}>
            <Button>Thay đổi</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Address;
