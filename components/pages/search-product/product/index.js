import React from 'react';
import Link from 'next/link';
import { AiFillStar, AiOutlineShoppingCart } from 'react-icons/ai';

import styles from './Product.module.scss';

function Product({ data }) {
    return (
        <div className={styles.container}>
            {data.length === 0 ? (
                <h3>Không có sản phẩm nào hợp lệ!</h3>
            ) : (
                <div className={styles.main}>
                    <div className={styles.img}>
                        <Link href={`/product-detail/${data?._id}`}>
                            <a>
                                <img src={data.img} alt="anh san pham" />
                            </a>
                        </Link>
                    </div>

                    <div className={styles.description}>
                        <div className={styles.name}>
                            <p>{data.title}</p>
                        </div>

                        <div className={styles.info}>
                            <div className={styles.star}>
                                <div className={styles.icon}>
                                    <AiFillStar></AiFillStar>
                                </div>
                                <span>{data.rate}</span>
                            </div>
                            <div className={styles.cart}>
                                <div className={styles.icon}>
                                    <AiOutlineShoppingCart></AiOutlineShoppingCart>
                                </div>
                                <span>Đã bán {data.sold}</span>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Product;
