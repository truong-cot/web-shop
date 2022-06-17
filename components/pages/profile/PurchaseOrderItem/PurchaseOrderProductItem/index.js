import React from 'react';
import styles from './PurchaseOrderProductItem.module.scss';
import img from './../../../../../assets/images/products/image1.png';

function PurchaseOrderProductItem() {
    return (
        <div className={styles.product}>
            <div className={styles.img}>
                <img src={img.src} alt="anh san pham" />
            </div>
            <div className={styles.des}>
                <p className={styles.name}>Tên sản phẩm</p>
                <p className={styles.price}>
                    x<span>2</span>-<span>2000000</span>đ
                </p>
            </div>
        </div>
    );
}

export default PurchaseOrderProductItem;
