import React from "react";
import styles from "./BlogItem.module.scss";
import Link from "next/link";
import { AiOutlineEye } from "react-icons/ai";

function BlogItem() {
  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <div className={styles.image}>
          <Link href="./blog-detail">
            <a>
              <img
                src="https://images.pexels.com/photos/262508/pexels-photo-262508.jpeg?cs=srgb&dl=pexels-pixabay-262508.jpg&fm=jpg"
                alt="anh blog"
              />
            </a>
          </Link>
        </div>

        <div className={styles.title}>
          <Link href="./blog-detail">
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
