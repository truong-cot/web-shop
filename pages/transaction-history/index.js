import React from "react";
import styles from "./TransactionHistory.module.scss";
import NavProfile from "../../components/pages/profile/NavProfile";
import ContentProfile from "../../components/pages/profile/ContentProfile";

import TransactionHistoryEmpty from "../../components/pages/profile/TransactionHistory/Empty";

function TransactionHistory() {
  return (
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
  );
}

export default TransactionHistory;
