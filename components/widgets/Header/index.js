import React from "react";
import Link from "next/link";
import Image from "next/image";

import logo from "./../../../assets/images/logo.svg";
import HeaderLogin from "./HeaderLogin/HeaderLogin";
import HeaderNotLogin from "./HeaderNotLogin/HeaderNotLogin";

import styles from "./Header.module.scss";

function Header() {
  return (
    <div className={styles.container}>
      <div className="container">
        <div className={styles.header}>
          <Link href="/">
            <a className={styles.link}>
              <Image src={logo} alt="anh header" layout="fill" />
            </a>
          </Link>
          <ul className={styles.list}>
            <li className={styles.item}>
              <Link href="/">
                <a>Trang chủ</a>
              </Link>
            </li>
            <li className={styles.item}>
              <Link href="/carts">
                <a>Đơn hàng</a>
              </Link>
              <div className={styles.quantity}>
                <p>
                  + <span>5</span>
                </p>
              </div>
            </li>
            <li className={styles.item}>
              <Link href="/blogs">
                <a>Blog</a>
              </Link>
            </li>
          </ul>
          {/* <HeaderNotLogin /> */}
          <HeaderLogin />
        </div>
      </div>
    </div>
  );
}

export default Header;
