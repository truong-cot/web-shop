import React from "react";
import clsx from "clsx";
import styles from "./Button.module.scss";

function Button({ onClick, ...props }) {
  const classes = clsx(styles.btn, {
    [styles.primary]: props.primary,
    [styles.light]: props.light,
    [styles.danger]: props.danger,
    [styles.rounded]: props.rounded,
    [styles.shadow]: props.shadow,
    [styles.small]: props.small,
    [styles.big]: props.big,
    [styles.search]: props.search,
    [styles.product]: props.product,
    [styles.productDetail]: props.productDetail,
    [styles.voucher]: props.voucher,
    [styles.voucherDelete]: props.voucherDelete,
    [styles.voucherSave]: props.voucherSave,
    [styles.filter]: props.filter,
    [styles.filterActive]: props.filterActive,
  });

  return (
    <button className={classes} onClick={onClick}>
      {props.children}
    </button>
  );
}

export default Button;
