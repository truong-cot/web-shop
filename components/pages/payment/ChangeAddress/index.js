import React from "react";
import { useState } from "react";
import styles from "./ChangeAddress.module.scss";
import Button from "./../../../control/Button";

import { AiOutlineClose } from "react-icons/ai";

function ChangeAddress({ handleClose }) {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h3>Đổi địa chỉ nhận hàng</h3>
      </div>

      <div className={styles.info}>
        <div className={styles.input}>
          <input type="text" placeholder="Họ và tên" />
        </div>
        <div className={styles.input}>
          <input type="text" placeholder="Số điện thoại" />
        </div>
      </div>

      <div className={styles.selection}>
        <div className={styles.text}>
          <p>Tỉnh/ Thành phố</p>
        </div>
        <select name="district" id="district">
          <option value="">Ha noi</option>
          <option value="">Ha tinh</option>
        </select>
      </div>

      <div className={styles.selection}>
        <div className={styles.text}>
          <p>Quận/ Huyện</p>
        </div>
        <select name="district" id="district">
          <option value="">Ha noi</option>
          <option value="">Ha tinh</option>
        </select>
      </div>

      <div className={styles.selection}>
        <div className={styles.text}>
          <p>Xã/ Phường</p>
        </div>
        <select name="commune" id="commune">
          <option value="">Ha noi</option>
          <option value="">Ha tinh</option>
        </select>
      </div>

      <div className={styles.specific}>
        <input type="text" placeholder="Địa chỉ cụ thể" />
      </div>

      <div className={styles.button}>
        <Button primary rounded>
          Giao đến địa chỉ này
        </Button>
      </div>

      <div className={styles.iconClose} onClick={handleClose}>
        <AiOutlineClose />
      </div>
    </div>
  );
}

export default ChangeAddress;
