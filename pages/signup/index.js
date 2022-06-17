import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import router from 'next/router';
import { useState } from 'react';
import { toast } from 'react-toastify';

import RequireLogout from '../../components/proteced/RequireLogout';
import Loading from '../../components/control/Loading';
import authAPI from '../../api/auth';
import Layout from '../../components/widgets/Layout';
import styles from './Signup.module.scss';
import logo from './../../assets/images/logo.svg';
import Button from '../../components/control/Button';

function LoginPage() {
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        rePassword: '',
        username: '',
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        if (
            formData.email === '' ||
            formData.username === '' ||
            formData.password === '' ||
            formData.rePassword === ''
        ) {
            return toast.warn('Vui lòng điền đầy đủ thông tin!');
        }

        if (formData.password.length < 6) {
            return toast.warn('Mật khẩu tối thiểu 6 kí tự!');
        }

        if (!(formData.password === formData.rePassword)) {
            return toast.warn('Mật khẩu không trùng nhau!');
        }

        setLoading(true);
        (async () => {
            try {
                const response = await authAPI.register(formData);
                if (response.status === 'success') {
                    toast.success(response.message || 'Đăng ký thành công');
                    router.push('/login');
                } else {
                    toast.warn(response.message || 'Vui lòng thử lại sau');
                }

                setLoading(false);
            } catch (e) {
                setLoading(false);
                toast.error('Đăng ký thất bại');
            }
        })();
    };

    const handleChange = (e) => {
        const { value, name } = e.target;

        setFormData((prev) => {
            return {
                ...prev,
                [name]: value,
            };
        });
    };

    return (
        <RequireLogout>
            <div className={styles.container}>
                {loading && <Loading />}
                <div className="container">
                    <div className={styles.formContainer}>
                        <div className={styles.formHeader}>
                            <div className={styles.image}>
                                <Image src={logo} alt="logo" layout="fill" />
                            </div>
                            <p>
                                Bạn đã có tài khoản?{' '}
                                <Link href="/login">
                                    <a>Đăng nhập</a>
                                </Link>
                            </p>
                        </div>
                        <h3>Đăng ký</h3>
                        <form onSubmit={handleSubmit}>
                            <div className={styles.inputGroup}>
                                <div className={styles.inputText}>
                                    <input name="email" type="email" placeholder="Nhập email" onChange={handleChange} />
                                </div>
                                <div className={styles.inputText}>
                                    <input
                                        name="username"
                                        type="text"
                                        placeholder="Tên người dùng"
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>

                            <div className={styles.inputGroup}>
                                <div className={styles.inputPassword}>
                                    <input
                                        name="password"
                                        type="password"
                                        placeholder="Nhập mật khẩu"
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className={styles.inputPassword}>
                                    <input
                                        name="rePassword"
                                        type="password"
                                        placeholder="Nhập lại mật khẩu"
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>

                            <p>
                                Bằng việc đăng ký tham gia là bạn đã chấp nhận
                                <Link href="/terms-of-service">
                                    <a>điều khoản và chính sách</a>
                                </Link>
                                của chúng tôi
                            </p>
                            <div className={styles.btn}>
                                <Button primary shadow rounded product>
                                    Đăng ký
                                </Button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </RequireLogout>
    );
}

export default LoginPage;

LoginPage.layout = () => {
    return (
        <Layout isShowFooter={false} isShowHeader={false}>
            <LoginPage />
        </Layout>
    );
};
