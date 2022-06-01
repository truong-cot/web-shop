import React from "react";
import Button from "../../../control/Button";
import styles from "./ChangeVoucher.module.scss";
import VoucherItem from "./VoucherItem";
import { AiOutlineClose } from "react-icons/ai";

function ChangeVoucher({ handleClose }) {
  return (
    <div className={styles.change}>
      <div className={styles.title}>
        <h3>Chọn voucher</h3>
      </div>

      <div className={styles.main}>
        <div className={styles.item}>
          <VoucherItem />
        </div>
        <div className={styles.item}>
          <VoucherItem />
        </div>
        <div className={styles.item}>
          <VoucherItem />
        </div>
        <div className={styles.item}>
          <VoucherItem />
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
        <Button voucherSave rounded>
          Lưu
        </Button>
      </div>
    </div>
  );
}

export default ChangeVoucher;
