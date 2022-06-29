import React, { useRef, useEffect, useCallback } from 'react';
import { useDispatch } from 'react-redux';

import { convertCoin } from '../../../../common/func/convertCoin';
import { delToCart, updateCart } from '../../../../redux/actions/cart';
import styles from './Oder.module.scss';

function Oder({ data }) {
    const dispatch = useDispatch();
    const firstUpdate = useRef(true);

    useEffect(() => {
        /*---------- Không gọi dữ liệu khi lần đầu đc thêm vào DOM ----------*/
        if (firstUpdate.current) {
            firstUpdate.current = false;
            return;
        }
        dispatch(updateCart({ ...data }));
    }, [data, dispatch]);

    // newPrice
    const newCount = data?.price - (data?.discount * data?.price) / 100;

    // Delete to cart
    const handleDleteToCart = useCallback(() => {
        dispatch(delToCart(data));
    }, [dispatch, data]);

    return (
        <div className={styles.container}>
            <div className={styles.title}>
                <div className={styles.img}>
                    <img src={data.img} alt="anh don hang" />
                </div>
                <p className={styles.name}>{data.title}</p>
            </div>
            <div className={styles.des}>
                <p className={styles.size}>M</p>
<<<<<<< HEAD
                <p className={styles.unitPrice}>{data.price} vnđ</p>
=======
                <p className={styles.unitPrice}>đ{convertCoin(data.price)}</p>
>>>>>>> 99bb64d3f007f14bf5c4d1b9b3bde131be8d9798
                <p className={styles.quantily}>{data.quantily}</p>
                <p className={styles.price}>đ{convertCoin(data.quantily * newCount)}</p>
                <div className={styles.btnDelete} onClick={handleDleteToCart}>
                    <button>Xoá</button>
                </div>
            </div>
        </div>
    );
}

export default Oder;
