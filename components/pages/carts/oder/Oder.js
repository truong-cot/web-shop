import { useDispatch } from 'react-redux';
import React, { useRef, useEffect, useCallback } from 'react';

import { delToCart, updateCart } from '../../../../redux/actions/cart';
import styles from './Oder.module.scss';

function Oder({ data }) {
    const firstUpdate = useRef(true);
    const dispatch = useDispatch();
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
                <p className={styles.unitPrice}>{data.price} vnđ</p>
                <p className={styles.quantily}>{data.quantily}</p>
                <p className={styles.price}>đ{data.quantily * newCount}</p>
                <div className={styles.btnDelete} onClick={handleDleteToCart}>
                    <button>Xoá</button>
                </div>
            </div>
        </div>
    );
}

export default Oder;
