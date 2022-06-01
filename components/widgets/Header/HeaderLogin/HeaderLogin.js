import React from "react";
import avatar from "./../../../../assets/images/avatar.svg";
import Image from "next/image";
import { BsBell, BsChevronDown } from "react-icons/bs";
import styles from "./HeaderLogin.module.scss";
import Notification from "./Notification";
import LogOut from "./LogOut";

import { useState } from "react";

function HeaderLogin() {
  const [show, setShow] = useState(false);

  const handleClick = () => {
    setShow((show = !show));
  };

  return (
    <div className={styles.headerLogin}>
      <div className={styles.notification}>
        <div className={styles.icon} onClick={handleClick}>
          <BsBell />
          <div className={styles.quantity}>
            <span>5</span>
          </div>
        </div>
        {show !== false && <div className="overlay-header"></div>}

        {show !== false && (
          <div className={styles.dropdown}>
            <Notification onClose={handleClick} />
          </div>
        )}
      </div>
      <div className={styles.headerAvatar}>
        <div className={styles.image}>
          <Image src={avatar} alt="avatar" layout="fill" />
        </div>
        <div className={styles.logOut}>
          <LogOut></LogOut>
        </div>
      </div>
      <div className={styles.icon}>
        <BsChevronDown />
      </div>
    </div>
  );
}

export default HeaderLogin;
