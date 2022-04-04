import React from "react";
import styles from "./Search.module.scss";
import { BsSearch } from "react-icons/bs";

import Product from "./product";
import SearchPost from "./search-post";

function Search({ keyword }) {
  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <div className={styles.title}>
          <div className={styles.icon}>
            <BsSearch></BsSearch>
          </div>
          <p>
            Tất cả tìm kiếm cho <span>{keyword}</span>
          </p>
        </div>
        <h4 className={styles.des}>Sản phẩm</h4>

        <div className={styles.searchProduct}>
          <Product></Product>
          <Product></Product>
          <Product></Product>
        </div>

        <h4 className={styles.postTitle}>Bài viết</h4>

        <div className={styles.searchPosts}>
          <SearchPost></SearchPost>
          <SearchPost></SearchPost>
          <SearchPost></SearchPost>
        </div>
      </div>
    </div>
  );
}

export default Search;
