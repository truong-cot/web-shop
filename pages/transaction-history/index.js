import React from 'react';

import NavProfile from '../../components/pages/profile/NavProfile';
import RequireLogin from '../../components/proteced/RequireLogin';
import ContentProfile from '../../components/pages/profile/ContentProfile';
import PurchaseHistory from '../../components/pages/profile/PurchaseHistory';
import styles from './TransactionHistory.module.scss';

function TransactionHistory() {
    return (
        <RequireLogin>
            <div className={styles.container}>
                <div className="container">
                    <div className={styles.main}>
                        <NavProfile />
                        <ContentProfile>
                            <div className={styles.content}>
                                <div className={styles.tite}>
                                    <h4>Lịch sử giao dịch</h4>
                                </div>
                                <PurchaseHistory />
                            </div>
                        </ContentProfile>
                    </div>
                </div>
            </div>
        </RequireLogin>
    );
}

export default TransactionHistory;
