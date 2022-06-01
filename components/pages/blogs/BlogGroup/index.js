import React from "react";
import BlogItem from "./../BlogItem";

import styles from "./BlogGroup.module.scss";

function BlogGroup() {
  return (
    <div className={styles.container}>
      <div className="container">
        <div className={styles.main}>
          <BlogItem></BlogItem>
          <BlogItem></BlogItem>
          <BlogItem></BlogItem>
          <BlogItem></BlogItem>
          <BlogItem></BlogItem>
        </div>
      </div>
    </div>
  );
}

export default BlogGroup;
