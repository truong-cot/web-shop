import styles from "./Oder.module.scss";
import React, { useRef, useEffect, useCallback } from "react";

import { useDispatch } from "react-redux";
import { delToCart } from "../../../../redux/actions/cart";

function Oder({ data }) {
  const firstUpdate = useRef(true);
  const dispatch = useDispatch();
  useEffect(() => {
    /*---------- Không gọi dữ liệu khi lần đầu đc thêm vào DOM ----------*/
    if (firstUpdate.current) {
      firstUpdate.current = false;
      return;
    }
    dispatch(updateCart({ ...data }));
  }, []);

  // newPrice
  const newCount = data?.price - (data?.discount * data?.price) / 100;

  // Delete to cart
  const handleDleteToCart = useCallback(() => {
    dispatch(delToCart(data));
  }, [dispatch, data]);

  return (
    <div className={styles.oder}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.img}>
            <img src={data.img} alt="anh don hang" />
          </div>
          <p className={styles.des}>{data.title}</p>
        </div>

        <div className={styles.infomation}>
          <span className={styles.size}>
            <p>M</p>
          </span>
          <span className={styles.price}>
            đ<p>{data.price}</p>
          </span>
          <div className={styles.control}>
            <span>{data.quantily}</span>
          </div>
          <span className={styles.price}>
            đ<p>{data.quantily * newCount}</p>
          </span>
          <div className={styles.btnDelete} onClick={handleDleteToCart}>
            <button>Xoá</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Oder;
