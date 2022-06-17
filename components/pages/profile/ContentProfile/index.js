import React from 'react';
import styles from './ContentProfile.module.scss';

function ContentProfile({ children }) {
    return <div className={styles.container}>{children}</div>;
}

export default ContentProfile;
