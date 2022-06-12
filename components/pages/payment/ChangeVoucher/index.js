import React, { useState } from "react";
import Button from "../../../control/Button";
import styles from "./ChangeVoucher.module.scss";
import VoucherItem from "./VoucherItem";
import { AiOutlineClose } from "react-icons/ai";

import { dataVoucher } from "./../../../../api/dataVoucher";

function ChangeVoucher({ handleClose }) {
  return (
    <div className={styles.change}>
      <div className={styles.title}>
        <h3>Chọn voucher</h3>
      </div>

      <div className={styles.main}>
        <div className={styles.item}>
          {dataVoucher.map((item) => (
            <VoucherItem key={item.id} data={item} />
          ))}
        </div>
      </div>

      <div className={styles.btnClose}>
        <Button onClick={handleClose}>
          <div className={styles.icon}>
            <AiOutlineClose />
          </div>
        </Button>
      </div>

      <div className={styles.btnSave}>
        <Button voucherSave rounded onClick={handleClose}>
          Lưu
        </Button>
      </div>
    </div>
  );
}

export default ChangeVoucher;
