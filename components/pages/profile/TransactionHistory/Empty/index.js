import React from 'react';
import { useState, useEffect } from 'react';
import styles from './TransactionHistoryEmpty.module.scss';
import ordersAPI from '../../../../../api/orders';


function changeDateFormat(date) {
    const newDate = new Date(date);
    const day = `0${newDate.getDate()}`.slice(-2);
    const month = `0${newDate.getMonth() + 1}`.slice(-2);
    const year = newDate.getFullYear();
    const hours = `0${newDate.getHours()}`.slice(-2);
    const minutes = `0${newDate.getMinutes()}`.slice(-2);
    return `${day}/${month}/${year} ${hours}:${minutes}`;
  }

function TransactionHistoryEmpty() {
    const user = JSON.parse(localStorage.getItem('user'));
    const [userOrders, setUserOrders] = useState(null);


    useEffect(() => {
        const getUserOrders = async () => {
            try {
                const res = await ordersAPI.getUserOrders(user?._id, user?.accessToken);
                setUserOrders(res)

            } catch (err) {
                console.log(err);
            }
        };

        getUserOrders()
    }, []);

    console.log(userOrders)

    return (
        <div className={styles.container}>

            {userOrders && <table>
                <tr>
                    <th>Mã đơn hàng</th>
                    <th>Thời gian</th>
                    <th>Trạng thái</th>
                    <th>Tổng tiền</th>

                </tr>

                {userOrders && userOrders.map((item, index) => {
                    return <tr key={index}>
                    <td>{item._id}</td>
                    <td>{changeDateFormat(item.createdAt)}</td>
                    <td>{item.status}</td>
                    <td>{item.amount} vnđ</td>

                </tr>
                })}
            </table> 
}
            {/* {!userOrders && <div>Bạn chưa có giao dịch nào!</div>
            <div>
                <img
                    src="https://www.seekpng.com/png/detail/117-1170538_404-your-cart-is-empty.png"
                    alt="anh gio hang trong"
                />
            </div>} */}
        </div>
    );
}

export default TransactionHistoryEmpty;
