import React from "react";
import avatar from "../../../assets/images/avatar.svg";
import Image from "next/image";
import { BsBell, BsChevronDown } from "react-icons/bs";
import styles from "./Header.module.scss";

function HeaderLogin() {
  return (
    <div className={styles.headerLogin}>
      <div className={styles.notification}>
        <BsBell />
      </div>
      <div className={styles.headerAvatar}>
        <div className={styles.image}>
          <Image src={avatar} alt="avatar" layout="fill" />
        </div>
      </div>
      <div className={styles.icon}>
        <BsChevronDown />
      </div>
    </div>
  );
}

export default HeaderLogin;
