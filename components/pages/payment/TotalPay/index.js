import { useSelector } from 'react-redux';
import { useMemo } from 'react';
import styles from './TotalPay.module.scss';

function TotalPay() {
    const { cart } = useSelector((state) => state.cart);

    // const beforePrice = useMemo(() => {
    //     return cart.reduce((a, b) => {
    //         return a + b.price * b.quantily;
    //     }, 0);
    // }, [cart]);

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
                            $<span>{beforeFinish.toLocaleString()}</span>
                        </p>
                        <p>
                            $<span>5</span>
                        </p>
                        <p>
                            $<span>{(beforeFinish + 5).toLocaleString()}</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TotalPay;
