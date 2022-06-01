import React from "react";
import styles from "./Logo.module.scss";
import Link from "next/link";
import logo from "./../../../../assets/images/logo.svg";

function Logo() {
  return (
    <div className="container">
      <div className={styles.logo}>
        <Link href="/" className={styles.img}>
          <a>
            <img src={logo.src} alt="anh logo" />
          </a>
        </Link>
        <p className={styles.title}>Đơn hàng</p>
      </div>
    </div>
  );
}

export default Logo;
