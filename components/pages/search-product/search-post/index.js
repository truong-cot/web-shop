import React from "react";
import styles from "./SearchPost.module.scss";

function SearchPost() {
  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <div className={styles.title}>
          <p>Cách nấu canh cá siêu ngon tại nhà</p>
        </div>
        <div className={styles.content}>
          <p>
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old.
          </p>
        </div>
      </div>
    </div>
  );
}

export default SearchPost;
