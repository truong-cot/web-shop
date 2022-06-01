import React from "react";
import styles from "./NewPostItem.module.scss";
import Link from "next/link";

import { AiOutlineEye } from "react-icons/ai";

function NewPostItem() {
  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <div className={styles.title}>
          <Link href="./blog-detail">
            <a>Lorem ipsum dolor sit amet</a>
          </Link>
        </div>

        <div className={styles.description}>
          <div className={styles.time}>
            <p>
              <span>4</span>h trước
            </p>
          </div>

          <div className={styles.watch}>
            <div className={styles.icon}>
              <AiOutlineEye></AiOutlineEye>
            </div>
            <p>
              <span>16.576 </span>đã xem
            </p>
          </div>
        </div>

        <div className={styles.content}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lacus,
            fermentum amet faucibus sed id nisi lectus at.
          </p>
        </div>
      </div>
    </div>
  );
}

export default NewPostItem;
