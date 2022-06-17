import React from 'react';

import NavProfile from '../../components/pages/profile/NavProfile';
import RequireLogin from '../../components/proteced/RequireLogin';
import ContentProfile from '../../components/pages/profile/ContentProfile';
import TransactionHistoryEmpty from '../../components/pages/profile/TransactionHistory/Empty';
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
                                <TransactionHistoryEmpty />
                            </div>
                        </ContentProfile>
                    </div>
                </div>
            </div>
        </RequireLogin>
    );
}

export default TransactionHistory;
