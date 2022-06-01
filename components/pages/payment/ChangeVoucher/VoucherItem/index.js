import React from "react";
import styles from "./VoucherItem.module.scss";
import bgVoucher from "./../../../../../assets/images/voucher/Subtract.png";
import { BsClock, BsCheckCircleFill } from "react-icons/bs";
import Button from "./../../../../control/Button";

function VoucherItem() {
  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <div className={styles.img}>
          <img src={bgVoucher.src} alt="" />

          <div className={styles.success}>
            <div className={styles.icon}>
              <BsCheckCircleFill />
            </div>
            <p>Đã áp dụng</p>
          </div>
        </div>
        <div className={styles.content}>
          <h3 className={styles.title}>Giảm giá sản phẩm 10%</h3>
          <ul className={styles.description}>
            <li>DUACA giảm 20k cho đơn tối thiểu 60k</li>
            <li>Áp dụng cho hình thức thanh toán bằng DUACA</li>
          </ul>
        </div>

        <div className={styles.footer}>
          <div className={styles.DateExpiry}>
            <div className={styles.icon}>
              <BsClock />
            </div>
            <p>Khuyến mãi có hạn</p>
          </div>

          <div className={styles.btn}>
            <Button rounded voucher>
              Sử dụng
            </Button>
            {/* <Button voucherDelete>Xóa</Button> */}
          </div>
        </div>

        <div className={styles.line}></div>
      </div>
    </div>
  );
}

export default VoucherItem;
