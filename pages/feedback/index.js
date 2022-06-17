import React from 'react';

import ContentProfile from './../../components/pages/profile/ContentProfile';
import NavProfile from './../../components/pages/profile/NavProfile';
import RequireLogin from '../../components/proteced/RequireLogin';
import Button from './../../components/control/Button';
import styles from './Feedback.module.scss';

function Feedback() {
    return (
        <RequireLogin>
            <div className={styles.container}>
                <div className="container">
                    <div className={styles.main}>
                        <NavProfile />
                        <ContentProfile>
                            <form className={styles.form}>
                                <textarea className={styles.text} placeholder="Đóng góp ý kiến của bạn"></textarea>
                                <Button primary rounded product>
                                    Gửi
                                </Button>
                            </form>
                        </ContentProfile>
                    </div>
                </div>
            </div>
        </RequireLogin>
    );
}

export default Feedback;
