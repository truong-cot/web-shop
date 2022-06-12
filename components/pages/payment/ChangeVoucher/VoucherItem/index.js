import React, { useState } from "react";
import styles from "./VoucherItem.module.scss";
import bgVoucher from "./../../../../../assets/images/voucher/Subtract.png";
import { BsClock, BsCheckCircleFill } from "react-icons/bs";
import Button from "./../../../../control/Button";

function VoucherItem({ data }) {
  const [isVoucher, setIsVoucher] = useState(false);

  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <div className={styles.img}>
          <img src={bgVoucher.src} alt="" />
          {isVoucher && (
            <div className={styles.success}>
              <div className={styles.icon}>
                <BsCheckCircleFill />
              </div>
              <p>Đã áp dụng</p>
            </div>
          )}
        </div>
        <div className={styles.content}>
          <h3 className={styles.title}>{data.title}</h3>
          <ul className={styles.description}>
            {data.description.map((des) => (
              <li key={Math.random()}>{des}</li>
            ))}
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
            <Button rounded voucher onClick={() => setIsVoucher(true)}>
              Sử dụng
            </Button>
            <Button voucherDelete onClick={() => setIsVoucher(false)}>
              Xóa
            </Button>
          </div>
        </div>

        <div className={styles.line}></div>
      </div>
    </div>
  );
}

export default VoucherItem;
