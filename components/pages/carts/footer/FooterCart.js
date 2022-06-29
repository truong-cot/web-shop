import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { toast } from 'react-toastify';

import { convertCoin } from '../../../../common/func/convertCoin';
import Button from '../../../control/Button';
import styles from './Footer.module.scss';

function FooterCart() {
    const router = useRouter();
    // total price
    const { cart } = useSelector((state) => state.cart);
    const { isLogin } = useSelector((state) => state.auth);

    const totalPrice = useMemo(() => {
        return cart.reduce((a, b) => {
            return a + (b.price - (b.discount * b.price) / 100) * b.quantily;
        }, 0);
    }, [cart]);

    const handleSubmit = () => {
        if (!isLogin) {
            return router.push('/login');
        }
        if (totalPrice <= 0) {
            toast.warn('Bạn hãy chọn ít nhất 1 sản phẩm để thanh toán nhé');
            return;
        }

        router.push('/payment');
    };

    return (
        <div className={styles.footerCart}>
            <div className="container">
                <div className={styles.container}>
                    <p className={styles.title}>
                        Tất cả (<span>{cart.length}</span> sản phẩm)
                    </p>
                    <div className={styles.totalPrice}>
                        <p className={styles.price}>
                            đ<span>{totalPrice ? convertCoin(totalPrice) : 0}</span>
                        </p>
                        <div className={styles.btn} onClick={handleSubmit}>
                            <Button rounded primary product>
                                Mua hàng
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FooterCart;
