import React from 'react';
import Image from 'next/image';

import avatar from './../../assets/images/avatar.svg';

import ContentProfile from '../../components/pages/profile/ContentProfile';
import NavProfile from '../../components/pages/profile/NavProfile';
import RequireLogin from '../../components/proteced/RequireLogin';
import Button from '../../components/control/Button';
import styles from './InformationUser.module.scss';

function InformationUser() {
    return (
        <RequireLogin>
            <div className={styles.container}>
                <div className="container">
                    <div className={styles.main}>
                        <NavProfile />
                        <ContentProfile>
                            <div className={styles.profile}>
                                <div className={styles.title}>
                                    <h4>Chỉnh sửa hồ sơ cá nhân</h4>
                                </div>
                                <div className={styles.content}>
                                    <div className={styles.info}>
                                        <div className={styles.item}>
                                            <h3 className={styles.key}>Tên đăng nhập</h3>
                                            <p>Hanhlth_123</p>
                                        </div>
                                        <div className={styles.item}>
                                            <h3 className={styles.key}>Tên</h3>
                                            <input
                                                className={styles.inputName}
                                                type="text"
                                                placeholder="Nhập vào tên của bạn"
                                            />
                                        </div>
                                        <div className={styles.item}>
                                            <h3 className={styles.key}>Email</h3>
                                            <div className={styles.gmail}>
                                                <p>truong@gmail.com</p>
                                                <button>Thay đổi</button>
                                            </div>
                                        </div>
                                        <div className={styles.item}>
                                            <h3 className={styles.key}>Số điện thoại</h3>
                                            <div className={styles.phone}>
                                                <p>0123456789</p>
                                                <button>Thay đổi</button>
                                            </div>
                                        </div>
                                        <div className={styles.item}>
                                            <h3 className={styles.key}>Giới tính</h3>
                                            <div className={styles.groupRadio}>
                                                <input type="radio" value="nam" />
                                                <span>Nam</span>
                                                <input type="radio" value="nu" />
                                                <span>Nữ</span>
                                                <input type="radio" value="khac" />
                                                <span>Khác</span>
                                            </div>
                                        </div>
                                        <div className={styles.item}>
                                            <h3 className={styles.key}>Ngày sinh</h3>
                                            <input type="date" />
                                        </div>

                                        <div className={styles.btn}>
                                            <Button primary rounded product>
                                                Lưu
                                            </Button>
                                        </div>
                                    </div>
                                    <div className={styles.img}>
                                        <div className={styles.avatar}>
                                            <Image src={avatar} alt="avatar"></Image>
                                        </div>
                                        <div className={styles.input}>
                                            <label>
                                                <input type="file" />
                                                Chọn ảnh
                                            </label>
                                        </div>
                                        <div className={styles.des}>
                                            <p>Dung lượng tối đa 1MB Định dạng JPEG, PNG...</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </ContentProfile>
                    </div>
                </div>
            </div>
        </RequireLogin>
    );
}

export default InformationUser;
