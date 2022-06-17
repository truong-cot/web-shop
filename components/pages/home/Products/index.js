import React, { useState, useEffect } from 'react';

import ItemProduct from './ItemProduct';
import Button from '../../../control/Button';
import productAPI from '../../../../api/product';
import styles from './Products.module.scss';

import Link from 'next/link';

function Products() {
    const [manClothes, setManClothes] = useState([]);
    const [womanClothes, setWomanClothes] = useState([]);
    const [dresses, setDresses] = useState([]);

    const getManClothes = async () => {
        try {
            const res = await productAPI.getCategory('Kaki');
            setManClothes(res.payload);
        } catch (error) {
            console.log(error);
        }
    };

    const getWomanClothes = async () => {
        try {
            const res = await productAPI.getCategory('Vest');
            setWomanClothes(res.payload);
        } catch (error) {
            console.log(error);
        }
    };

    const getDressClothes = async () => {
        try {
            const res = await productAPI.getCategory('Đầm');
            setDresses(res.payload);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getManClothes();
        getWomanClothes();
        getDressClothes();
    }, []);

    return (
        <div className={styles.container}>
            <div className={styles.productsMain}>
                <div className="container">
                    <div className={styles.productsItem}>
                        <h3 className={styles.title}>Quần áo nam</h3>
                        <div className={styles.products}>
                            {manClothes.map((product) => {
                                return <ItemProduct key={product._id} data={product}></ItemProduct>;
                            })}
                        </div>
                        <div className={styles.btn}>
                            <Link href="/detail-products">
                                <a>
                                    <Button rounded primary product>
                                        Xem thêm
                                    </Button>
                                </a>
                            </Link>
                        </div>
                    </div>

                    <div className={styles.productsItem}>
                        <h3 className={styles.title}>Quần áo nữ</h3>
                        <div className={styles.products}>
                            {womanClothes.map((product) => {
                                return <ItemProduct key={product._id} data={product}></ItemProduct>;
                            })}
                        </div>
                        <div className={styles.btn}>
                            <Link href="/detail-products">
                                <a>
                                    <Button rounded primary product>
                                        Xem thêm
                                    </Button>
                                </a>
                            </Link>
                        </div>
                    </div>

                    <div className={styles.productsItem}>
                        <h3 className={styles.title}>Đầm nữ</h3>
                        <div className={styles.products}>
                            {dresses.map((product) => {
                                return <ItemProduct key={product._id} data={product}></ItemProduct>;
                            })}
                        </div>
                        <div className={styles.btn}>
                            <Link href="/detail-products">
                                <a>
                                    <Button rounded primary product>
                                        Xem thêm
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

export default Products;
