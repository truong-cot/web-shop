import React from "react";
import styles from "./Blogs.module.scss";
import BlogGroup from "./../../components/pages/blogs/BlogGroup";
import SearchHearer from "../../components/pages/blogs/SearchHeader";

function Blogs() {
  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <div className={styles.searchHeader}>
          <SearchHearer></SearchHearer>
        </div>
        <div className={styles.blogGroup}>
          <BlogGroup></BlogGroup>
        </div>
      </div>
    </div>
  );
}

export default Blogs;
