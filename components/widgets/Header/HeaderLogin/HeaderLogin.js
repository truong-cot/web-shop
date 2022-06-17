import React from 'react';
import Image from 'next/image';
import { BsBell, BsChevronDown } from 'react-icons/bs';

import LogOut from './LogOut';
import Notification from './Notification';
import avatar from './../../../../assets/images/avatar.svg';
import styles from './HeaderLogin.module.scss';

import { useState } from 'react';

function HeaderLogin() {
    const [show, setShow] = useState(false);

    const handleClick = () => {
        setShow((show = !show));
    };

    return (
        <div className={styles.headerLogin}>
            <div className={styles.notification}>
                <div className={styles.icon} onClick={handleClick}>
                    <BsBell />
                    <div className={styles.quantity}>
                        <span>4</span>
                    </div>
                </div>
                {show !== false && <div onClick={handleClick} className="overlay-header"></div>}

                {show !== false && (
                    <div className={styles.dropdown}>
                        <Notification onClose={handleClick} />
                    </div>
                )}
            </div>
            <div className={styles.headerAvatar}>
                <div className={styles.image}>
                    <Image src={avatar} alt="avatar" layout="fill" />
                </div>
                <div className={styles.logOut}>
                    <LogOut></LogOut>
                </div>
            </div>
            <div className={styles.icon}>
                <BsChevronDown />
            </div>
        </div>
    );
}

export default HeaderLogin;
