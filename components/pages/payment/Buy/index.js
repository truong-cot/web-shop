import Link from 'next/link';
import { useMemo } from 'react';
import { toast } from 'react-toastify';
import { useRouter } from 'next/router';
import { useSelector, useDispatch } from 'react-redux';

import { shipMoney } from '../../../../common/variable';
import Button from './../../../control/Button';
import ordersAPI from '../../../../api/orders';
import { getCart } from '../../../../redux/actions/cart';
import styles from './Buy.module.scss';

function Buy({ data }) {
    const router = useRouter();
    const dispatch = useDispatch();

    const { cart } = useSelector((state) => state.cart);
    const { dataUser } = useSelector((state) => state.user);
    const { token } = useSelector((state) => state.auth);

    const beforeFinish = useMemo(() => {
        return cart.reduce((a, b) => {
            return a + (b.price - (b.price / 100) * b.discount) * b.quantily;
        }, 0);
    }, [cart]);

    const handleSubmit = () => {
        if (data?.specific && `${data?.specific}`.trim() !== '') {
            (async () => {
                try {
                    const dataSubmit = {
                        username: dataUser.username,
                        userId: dataUser._id,
                        products: cart,
                        amount: `${beforeFinish + shipMoney}`,
                        address: data?.specific,
                    };
                    const res = await ordersAPI.createOrder(dataSubmit, token);
                    if (res.status === 'success') {
                        toast.success('Đặt hàng thàng công');
                        dispatch(getCart([]));
                        router.replace('/transaction-history');
                    } else {
                        toast.error('Vui lòng thử lại sau ít phút');
                    }
                } catch (err) {
                    console.log(err);
                }
            })();
        } else {
            toast.warn('Vui lòng chọn địa chỉ nhận hàng');
        }
    };

    return (
        <div className={styles.container}>
            <div className="container">
                <div className={styles.main}>
                    <div className={styles.title}>
                        <p>
                            Nhấn Đặt Hàng đồng nghĩa với việc bạn đồng ý tuân theo
                            <Link href="./terms-of-service">
                                <a>Điều khoản Duaca</a>
                            </Link>
                        </p>
                    </div>
                    <div className={styles.btn}>
                        <Button primary rounded product onClick={handleSubmit}>
                            Mua hàng
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Buy;
