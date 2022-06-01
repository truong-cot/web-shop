import React from "react";
import styles from "./Footer.module.scss";
import { BsHeadset } from "react-icons/bs";

function FooterItemContact({ Icon, title, contact }) {
  return (
    <div className={styles.itemContact}>
      <div className={styles.icon}>
        <Icon />
      </div>
      <div className={styles.content}>
        <span>{title}</span>
        <p>{contact}</p>
      </div>
    </div>
  );
}

export default FooterItemContact;
