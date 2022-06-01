import React from "react";
import styles from "./ReviewItem.module.scss";

import avatar from "./../../../../../assets/images/avatar.svg";
import { AiFillStar } from "react-icons/ai";

function ReviewItem() {
  return (
    <div className={styles.container}>
      <div className="container">
        <div className={styles.main}>
          <div className={styles.avatar}>
            <img src={avatar.src} alt="" />
          </div>

          <div className={styles.info}>
            <div className={styles.name}>
              <h4>Đặng Bá Trường</h4>
            </div>
            <div className={styles.star}>
              <AiFillStar></AiFillStar>
              <AiFillStar></AiFillStar>
              <AiFillStar></AiFillStar>
              <AiFillStar></AiFillStar>
              <AiFillStar></AiFillStar>
            </div>

            <div className={styles.content}>
              <p>
                Contrary to popular belief, Lorem Ipsum is not simply random
                text. It has roots in a piece of classical Latin literature from
                45 BC, making it over 2000 years old. Richard McClintock, a
                Latin professor at Hampden-Sydney College in Virginia,
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ReviewItem;
