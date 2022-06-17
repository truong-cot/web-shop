import { useState } from 'react';
import Address from '../../components/pages/payment/address/Address';
import Product from '../../components/pages/payment/product/Product';
import TotalPay from './../../components/pages/payment/TotalPay';
import Buy from './../../components/pages/payment/Buy';

import RequireLogin from '../../components/proteced/RequireLogin';
import styles from './Payment.module.scss';
import { useSelector } from 'react-redux';

function Payment() {
    const [data, setData] = useState({});
    const { cart } = useSelector((state) => state.cart);

    return (
        <RequireLogin>
            <div>
                <div>
                    <Address data={data} setData={setData} />
                </div>
                <div>
                    <div className="container">
                        <div className={styles.rowTitle}>
                            <p>Sản phẩm</p>
                            <p>Size</p>
                            <p>Đơn giá</p>
                            <p>Số lượng</p>
                            <p>Thành tiền</p>
                        </div>
                    </div>
                    <div className={styles.products}>
                        {cart.map((item) => (
                            <Product key={item._id} data={item}></Product>
                        ))}
                    </div>

                    <div>
                        <TotalPay />
                    </div>
                    <div>
                        <Buy data={data} />
                    </div>
                </div>
            </div>
        </RequireLogin>
    );
}

export default Payment;
