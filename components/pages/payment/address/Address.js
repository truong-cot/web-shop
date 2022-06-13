import React from "react";
import { useState } from "react";
import styles from "./Address.module.scss";
import ChangeAddress from "./../ChangeAddress";
import Button from "./../../../control/Button";
import { FaMapMarkerAlt } from "react-icons/fa";

function Address() {
  const [show, setShow] = useState(false);
  const [data, setData] = useState({});

  const initLocation = {
    name: "Tên người dùng",
    phone: "Số điện thoại người dùng",
    city: "Chưa có địa chỉ",
    district: "Chưa có địa chỉ",
    city: "Chưa có địa chỉ",
  };

  const getData = (data) => {
    setData(data);
  };

  console.log("Data: ", data);

  const handleShow = () => {
    setShow(!show);
  };

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
            <p className={styles.info}>
              <span>{data.name ? data.name : initLocation.name}</span> -{" "}
              <span>{data.phone ? data.phone : initLocation.phone}</span>
            </p>
            <p className={styles.add}>{data.specific}</p>
            <span className={styles.des}>
              {/* Tố Hữu, Phường Trung Văn, Quận Nam Từ Liêm, Hà Nội */}
              {data.ward ? data.ward : initLocation.city} -{" "}
              {data.district ? data.district : initLocation.district} -{" "}
              {data.city ? data.city : initLocation.city}
            </span>
          </div>

          <div className={styles.btn}>
            <Button onClick={handleShow}>Thay đổi</Button>

            {show && <div className="overlay"></div>}

            {show && (
              <div className={styles.change}>
                <ChangeAddress handleClose={handleShow} getData={getData} />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Address;
