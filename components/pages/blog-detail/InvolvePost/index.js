import React from "react";
import styles from "./InvolvePost.module.scss";
import BlogItem from "./../../blogs/BlogItem";

function InvolvePost() {
  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <div className={styles.title}>
          <p>Bài viết liên quan</p>
        </div>

        <div className={styles.groupPost}>
          <BlogItem></BlogItem>
          <BlogItem></BlogItem>
          <BlogItem></BlogItem>
        </div>
      </div>
    </div>
  );
}

export default InvolvePost;
