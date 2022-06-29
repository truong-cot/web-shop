import { useMemo } from 'react';
import { useSelector } from 'react-redux';

import { convertCoin } from '../../../../common/func/convertCoin';
import styles from './TotalPay.module.scss';

function TotalPay() {
    const shipMoney = 50000;
    const { cart } = useSelector((state) => state.cart);

    const beforeFinish = useMemo(() => {
        return cart.reduce((a, b) => {
            return a + (b.price - (b.price / 100) * b.discount) * b.quantily;
        }, 0);
    }, [cart]);

    return (
        <div className={styles.container}>
            <div className="container">
                <div className={styles.main}>
                    <div></div>
                    <div className={styles.title}>
                        <p>Tổng tiền hàng</p>
                        <p>Phí vận chuyển</p>
                        <p>Tổng thanh toán:</p>
                    </div>
                    <div className={styles.price}>
                        <p>
                            đ<span>{convertCoin(beforeFinish)}</span>
                        </p>
                        <p>
                            đ<span>{convertCoin(shipMoney)}</span>
                        </p>
                        <p>
                            đ<span>{convertCoin(beforeFinish + shipMoney)}</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TotalPay;
