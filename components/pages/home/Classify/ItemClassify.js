import React from "react";
import styles from "./Classify.module.scss";
import Link from "next/link";

function ItemClassify({ image, des }) {
  return (
    <div className={styles.ItemClassify}>
      <div className={styles.image}>
        <Link href="/">
          <a>
            <img src={image.src} alt="anh classify" />
          </a>
        </Link>
      </div>
      <div className={styles.des}>
        <a>
          <Link href="/">{des}</Link>
        </a>
      </div>
    </div>
  );
}

export default ItemClassify;
