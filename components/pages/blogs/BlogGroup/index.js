import React from "react";
import BlogItem from "../BlogItem";

import styles from "./BlogGroup.module.scss";

function BlogGroup({data}) {

  return (
    <div className={styles.container}>
      <div className="container">
        <div className={styles.main}>
          {data.map((blog) => (
            <BlogItem key={blog._id} data={blog}></BlogItem>
          ))}
        </div>
      </div>
    </div>
  );
}

export default BlogGroup;
