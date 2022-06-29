import React, { useState, useEffect } from 'react';

import ordersAPI from '../../../../api/orders';
import { convertCoin } from '../../../../common/func/convertCoin';
import { changeDateFormat } from '../../../../common/func/changeDateFormat';
import styles from './PurchaseHistory.module.scss';

function PurchaseHistory() {
    const user = JSON.parse(localStorage.getItem('user'));
    const [userOrders, setUserOrders] = useState(null);

    useEffect(() => {
        const getUserOrders = async () => {
            try {
                const res = await ordersAPI.getUserOrders(user?._id, user?.accessToken);
                setUserOrders(res);
            } catch (err) {
                console.log(err);
            }
        };

        getUserOrders();
    }, [user?._id, user?.accessToken]);

    console.log(userOrders);

    return (
        <div className={styles.container}>
            {userOrders?.length > 0 ? (
                <table>
                    <tr>
                        <th>Mã đơn hàng</th>
                        <th>Thời gian</th>
                        <th>Trạng thái</th>
                        <th>Tổng tiền</th>
                    </tr>

                    {userOrders.map((item, index) => {
                        return (
                            <tr key={index}>
                                <td>{item._id}</td>
                                <td>{changeDateFormat(item.createdAt)}</td>
                                <td>{item.status}</td>
                                <td>{convertCoin(item.amount)}đ</td>
                            </tr>
                        );
                    })}
                </table>
            ) : (
                <h3>Bạn chưa có giao dịch nào!</h3>
            )}
        </div>
    );
}

export default PurchaseHistory;
