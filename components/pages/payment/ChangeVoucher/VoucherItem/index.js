import React, { useState } from 'react';
import { BsClock, BsCheckCircleFill } from 'react-icons/bs';

import Button from './../../../../control/Button';
import bgVoucher from './../../../../../assets/images/voucher/Subtract.png';
import styles from './VoucherItem.module.scss';

function VoucherItem({ data }) {
    const [isVoucher, setIsVoucher] = useState(false);

    const handleUse = () => {
        setIsVoucher(true);
    };

    return (
        <div className={styles.container}>
            <div className={styles.main}>
                <div className={styles.img}>
                    <img src={bgVoucher.src} alt="bg Vouchef" />
                    {isVoucher && (
                        <div className={styles.success}>
                            <div className={styles.icon}>
                                <BsCheckCircleFill />
                            </div>
                            <p>Đã áp dụng</p>
                        </div>
                    )}
                </div>
                <div className={styles.content}>
                    <h3 className={styles.title}>{data.title}</h3>
                    <ul className={styles.description}>
                        {data.description.map((des, index) => (
                            <li key={data.description[index]}>{des}</li>
                        ))}
                    </ul>
                </div>

                <div className={styles.footer}>
                    <div className={styles.DateExpiry}>
                        <div className={styles.icon}>
                            <BsClock />
                        </div>
                        <p>Khuyến mãi có hạn</p>
                    </div>

                    <div className={styles.btn}>
                        <Button rounded voucher onClick={handleUse}>
                            Sử dụng
                        </Button>
                        <Button voucherDelete onClick={() => setIsVoucher(false)}>
                            Xóa
                        </Button>
                    </div>
                </div>

                <div className={styles.line}></div>
            </div>
        </div>
    );
}

export default VoucherItem;
