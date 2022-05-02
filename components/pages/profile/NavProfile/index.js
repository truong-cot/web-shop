import React from "react";
import styles from "./NavProfile.module.scss";
import avatar from "./../../../../assets/images/avatar.svg";
import Button from "./../../../control/Button";

import { IoLogoUsd } from "react-icons/io";
import Link from "next/link";

function NavProfile() {
  return (
    <div className={styles.container}>
      <div className={styles.user}>
        <div className={styles.img}>
          <img src={avatar.src} alt="avatar" />
        </div>
        <div className={styles.info}>
          <h4 className={styles.account}>truong.1609</h4>
          <p className={styles.name}>Dang ba truong</p>
        </div>
      </div>

      <div className={styles.coin}>
        <div className={styles.countCoin}>
          <div className={styles.icon}>
            <IoLogoUsd />
          </div>
          <div className={styles.count}>
            123456<span>XU</span>
          </div>
        </div>

        <div className={styles.btn}>
          <Link href="#">
            <Button primary rounded>
              Nap tien
            </Button>
          </Link>
        </div>
      </div>

      <ul className={styles.nav}>
        <li className={styles.item}>
          <Link href="/informationUser">
            <a>Hồ sơ cá nhân</a>
          </Link>
        </li>
        <li className={styles.item}>
          <Link href="/transactionHistory">
            <a>Lịch sử giao dịch</a>
          </Link>
        </li>
        <li className={styles.item}>
          <Link href="/purchaseOrder">
            <a>Đơn mua</a>
          </Link>
        </li>
        <li className={styles.item}>
          <Link href="/question">
            <a>Câu hỏi thường gặp</a>
          </Link>
        </li>
        <li className={styles.item}>
          <Link href="/feedback">
            <a>Góp ý</a>
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default NavProfile;
