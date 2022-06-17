import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import productAPI from '../../../api/product';
import Search from '../../../components/pages/home/Search';
import Information from '../../../components/pages/product-detail/Information';
import ReviewProduct from '../../../components/pages/product-detail/ReviewProduct';
import DescriptionProduct from '../../../components/pages/product-detail/DescriptionProduct';
import styles from './ProductDetail.module.scss';

function ProductDetail() {
    const router = useRouter();
    const [product, setProduct] = useState({});

    // Call api getProduct
    useEffect(() => {
        const getProduct = async () => {
            const res = await productAPI.getProduct(router.query.id);
            setProduct(res.payload);
        };
        getProduct();
    }, [router.query.id]);

    return (
        <div className={styles.container}>
            <div>
                <Search></Search>
            </div>
            <div>
                <Information data={product}></Information>
            </div>
            <div>
                <DescriptionProduct data={product}></DescriptionProduct>
            </div>
            <div>
                <ReviewProduct></ReviewProduct>
            </div>
        </div>
    );
}

export default ProductDetail;
