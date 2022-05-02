import React from "react";
import styles from "./LogOut.module.scss";
import { FiUser } from "react-icons/fi";
import { AiOutlineLogout } from "react-icons/ai";
import Link from "next/link";

function LogOut() {
  return (
    <div className={styles.container}>
      <Link href="/informationUser">
        <a className={styles.account}>
          <div className={styles.icon}>
            <FiUser></FiUser>
          </div>
          <div className={styles.content}>
            <p>Tài khoản</p>
          </div>
        </a>
      </Link>

      <Link href="#">
        <a className={styles.account}>
          <div className={styles.icon}>
            <AiOutlineLogout></AiOutlineLogout>
          </div>
          <div className={styles.content}>
            <p>Đăng xuất</p>
          </div>
        </a>
      </Link>
    </div>
  );
}

export default LogOut;
