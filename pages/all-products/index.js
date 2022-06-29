import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
import { FaFilter } from 'react-icons/fa';

import productAPI from '../../api/product';
import Banner from '../../components/pages/home/Banner';
import Search from '../../components/pages/home/Search';
import ItemProduct from '../../components/pages/home/Products/ItemProduct';
import styles from './AllProduct.module.scss';

function AllProduct() {
    const [products, setProducts] = useState([]);
    const [type, setType] = useState('Nam');
    const filter = ['Nam', 'Nữ', 'Vest', 'Kaki', 'Khoác gió'];

    const getProducts = async (type) => {
        try {
            const res = await productAPI.getCategory(type);
            setProducts(res.payload);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getProducts(type);
    }, [type]);

    const handleFilter = (category) => {
        setType(category);
    };

    return (
        <div className={styles.container}>
            <div className={styles.banner}>
                <Banner></Banner>
            </div>
            <div className={styles.search}>
                <Search></Search>
            </div>
            <div className="container">
                <div className={styles.main}>
                    <div className={styles.title}>
                        <h3>QUẦN ÁO</h3>
                        <div className={styles.filter}>
                            <div className={styles.filterParent}>
                                <div className={styles.icon}>
                                    <FaFilter />
                                </div>
                                Lọc
                            </div>

                            {filter.map((item, index) => (
                                <div key={index}>
                                    <button
                                        className={clsx(styles.filterItem, { [styles.active]: type === item })}
                                        onClick={() => {
                                            handleFilter(item);
                                        }}
                                        filter
                                    >
                                        {item}
                                    </button>
                                </div>
                            ))}

                            {/* <div className={styles.filterItem}>
                                <Button onClick={() => handleFilter('Nữ')} filter>
                                    Nữ
                                </Button>
                            </div>
                            <div className={styles.filterItem}>
                                <Button onClick={() => handleFilter('Vest')} filter>
                                    Vest
                                </Button>
                            </div>
                            <div className={styles.filterItem}>
                                <Button onClick={() => handleFilter('Kaki')} filter>
                                    Kaki
                                </Button>
                            </div>
                            <div className={styles.filterItem}>
                                <Button onClick={() => handleFilter('Khoác gió')} filter>
                                    Khoác gió
                                </Button>
                            </div> */}
                        </div>
                    </div>

                    <div className={styles.products}>
                        {products.map((item) => {
                            return <ItemProduct key={item._id} data={item}></ItemProduct>;
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AllProduct;
