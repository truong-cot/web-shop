import React from 'react';
import { GrPrevious, GrNext } from 'react-icons/gr';

import ReviewItem from './ReviewItem';
import styles from './ReviewProduct.module.scss';

function ReviewProduct() {
    return (
        <div className={styles.container}>
            <div className="container">
                <div className={styles.main}>
                    <div className={styles.title}>
                        <h3>ĐÁNH GIÁ SẢN PHẨM</h3>
                    </div>
                </div>
            </div>

            <div>
                <ReviewItem></ReviewItem>
                <ReviewItem></ReviewItem>
                <ReviewItem></ReviewItem>
            </div>

            <div className="container">
                <div className={styles.control}>
                    <button className={styles.btnPrev}>
                        <GrPrevious></GrPrevious>
                    </button>
                    <p className={styles.page}>1</p>
                    <button className={styles.btnNext}>
                        <GrNext></GrNext>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ReviewProduct;
