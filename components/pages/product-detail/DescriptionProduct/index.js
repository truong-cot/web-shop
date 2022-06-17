import React from 'react';
import Link from 'next/link';

import styles from './DescriptionProduct.module.scss';

function DescriptionProduct({ data }) {
    return (
        <div className={styles.container}>
            <div className="container">
                <div className={styles.main}>
                    <div className={styles.title}>
                        <h4>Mô tả sản phẩm</h4>
                    </div>

                    <div className={styles.description}>
                        <p>{data?.desc}</p>
                    </div>

                    <div className={styles.posts}>
                        <div className={styles.title}>
                            <h4>Bài viết liên quan:</h4>
                        </div>
                        <div className={styles.postItem}>
                            <Link href="#">
                                <a>http://duaca.vn/nhung_cach_che_bien_mon_an_ngon_tu_ca_hoi_1.html</a>
                            </Link>
                        </div>
                        <div className={styles.postItem}>
                            <Link href="#">
                                <a>http://duaca.vn/nhung_cach_che_bien_mon_an_ngon_tu_ca_hoi_1.html</a>
                            </Link>
                        </div>
                        <div className={styles.postItem}>
                            <Link href="#">
                                <a>http://duaca.vn/nhung_cach_che_bien_mon_an_ngon_tu_ca_hoi_1.html</a>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DescriptionProduct;
