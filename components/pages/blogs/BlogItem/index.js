import React from "react";
import styles from "./BlogItem.module.scss";
import Link from "next/link";

import { AiOutlineEye } from "react-icons/ai";

import imageBlog from "./../../../../assets/images/blogs/imageBlog.png";

function BlogItem() {
  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <div className={styles.image}>
          <Link href="#">
            <a>
              <img src={imageBlog.src} alt="anh blog" />
            </a>
          </Link>
        </div>

        <div className={styles.title}>
          <Link href="#">
            <a>
              <h4>Lorem ipsum dolor sit amet</h4>
            </a>
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

export default BlogItem;
