import React from "react";
import styles from "./SearchHeader.module.scss";
import { BsSearch } from "react-icons/bs";

import Link from "next/link";

function SearchHeader() {
  return (
    <div className={styles.container}>
      <div className="container">
        <div className={styles.main}>
          <div className={styles.input}>
            <div className={styles.icon}>
              <BsSearch></BsSearch>
            </div>
            <input type="text" placeholder="Tìm kiếm" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchHeader;
