import { useState } from "react";
import React from "react";
import styles from "./Sale.module.scss";

import Button from "../../../control/Button";
import ChangeVoucher from "./../ChangeVoucher";

function Sale() {
  const [show, setShow] = useState(false);

  const handleShow = () => {
    setShow(!show);
  };

  return (
    <div className={styles.container}>
      <div className="container">
        <div className={styles.main}>
          <div className={styles.title}>
            <p>Khuyến mãi</p>
          </div>
          <div className={styles.btn}>
            <Button onClick={handleShow}>Chọn voucher</Button>

            {show !== false && <div className="overlay"></div>}

            {show !== false && (
              <div className={styles.change}>
                <ChangeVoucher handleClose={handleShow} />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sale;
