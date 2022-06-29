import React from 'react';

import { convertCoin } from '../../../../common/func/convertCoin';
import styles from './Product.module.scss';

function Product({ data }) {
    const newCount = data?.price - (data?.discount * data?.price) / 100;

    return (
        <div className="container">
            <div className={styles.product}>
                <div className={styles.title}>
                    <div className={styles.img}>
                        <img src={data.img} alt="anh san pham" />
                    </div>
                    <p className={styles.des}>{data.title}</p>
                </div>

                <p className={styles.size}>
                    <span>M</span>
                </p>
                <p className={styles.price}>
                    đ<span>{convertCoin(data.price)}</span>
                </p>
                <p className={styles.quantity}>{data.quantily}</p>
                <p className={styles.totalPrice}>
                    đ<span>{convertCoin(newCount * data.quantily)}</span>
                </p>
            </div>
        </div>
    );
}

export default Product;
