import React, { memo, useCallback, useState } from 'react';
import Link from 'next/link';
import { toast } from 'react-toastify';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import { BsFillStarFill, BsCartCheck } from 'react-icons/bs';

import Button from '../../../control/Button';
import { addToCart } from '../../../../redux/actions/cart';
import styles from './Information.module.scss';

function Information({ data }) {
    const router = useRouter();

    // Change quantity
    const [quantity, setQuantity] = useState(1);

    const handleReduce = () => {
        setQuantity(quantity - 1);
        if (quantity <= 0) {
            setQuantity(0);
        }
    };

    const handleIncrease = () => {
        setQuantity(quantity + 1);
    };

    // add to cart
    const dispatch = useDispatch();

    const handleAddProduct = useCallback(() => {
        dispatch(addToCart({ ...data, quantily: quantity }));
        toast.success('Thêm sản phẩm thành công');
    }, [quantity, dispatch, data]);

    // Buy product
    const handleByProduct = useCallback(() => {
        dispatch(addToCart({ ...data, quantily: quantity }));
        router.push('/payment');
    }, [dispatch, data, quantity, router]);

    return (
        <div className={styles.container}>
            <div className="container">
                <div className={styles.main}>
                    <div className={styles.image}>
                        <div className={styles.imageInfo}>
                            <img src={data?.img} alt="anh chi tiet san pham" />
                        </div>
                    </div>

                    <div className={styles.informaiton}>
                        <div className={styles.title}>
                            <h4>{data?.title}</h4>
                        </div>
                        <div className={styles.description}>
                            <div className={styles.star}>
                                <div className={styles.icon}>
                                    <BsFillStarFill></BsFillStarFill>
                                </div>
                                <div className={styles.text}>
                                    <span>{data?.rate}</span>
                                </div>
                            </div>

                            <div className={styles.soldOut}>
                                <div className={styles.icon}>
                                    <BsCartCheck></BsCartCheck>
                                </div>
                                <div className={styles.text}>
                                    <span>Đã bán {data?.sold}</span>
                                </div>
                            </div>
                        </div>

                        <div className={styles.price}>
                            <del className={styles.prevPrice}>{data?.price}$</del>
                            <h4 className={styles.beforePrice}>{data.price - (data.discount * data.price) / 100}$</h4>
                            <p className={styles.sale}>
                                -<span>{data.discount}%</span>
                            </p>
                        </div>

                        {/* <div className={styles.sizes}>
                            <div className={styles.title}>
                                <p>Size</p>
                            </div>
                            <div className={styles.groupSize}>
                                {data.size?.map((ele, index) => {
                                    return (
                                        <Button
                                            key={index}
                                            onClick={() => {
                                                setGetValueSize(ele);
                                            }}
                                        >
                                            {ele}
                                        </Button>
                                    );
                                })}
                            </div>
                        </div> */}

                        <div className={styles.quantity}>
                            <p className={styles.title}>Số lượng</p>
                            <div className={styles.groupBtn}>
                                <button onClick={handleReduce}>-</button>
                                <span>{quantity}</span>
                                <button onClick={handleIncrease}>+</button>
                            </div>
                        </div>

                        <div className={styles.control}>
                            <Button rounded productDetail search onClick={handleAddProduct}>
                                Thêm vào giỏ hàng
                            </Button>
                            <Link href="/payment">
                                <a className={styles.btnPay}>
                                    <Button primary rounded productDetail onClick={handleByProduct}>
                                        Mua ngay
                                    </Button>
                                </a>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default memo(Information);
