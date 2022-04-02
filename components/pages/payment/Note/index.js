import React from "react";
import styles from "./Note.module.scss";

function Note() {
  return (
    <div className="container">
      <div className={styles.container}>
        <div className={styles.input}>
          <input type="text" placeholder="Lời nhắn, lưu ý về sản phẩm" />
        </div>
        <div className={styles.title}>
          <p>Chọn hình thức nhận</p>
        </div>
        <div className={styles.groupRadio}>
          <div className={styles.radio}>
            <input type="radio" />
            <span>Treo cửa</span>
          </div>
          <div className={styles.radio}>
            <input type="radio" />
            <span>Gửi lễ tân</span>
          </div>
          <div className={styles.radio}>
            <input type="radio" />
            <span>Trao tận tay</span>
          </div>
        </div>
        <div className={styles.price}>
          đ<span>20.000</span>
        </div>
      </div>
    </div>
  );
}

export default Note;
