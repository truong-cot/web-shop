import Link from 'next/link';
import Image from 'next/image';
import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';

import logo from './../../assets/images/logo.svg';

import Loading from '../../components/control/Loading';
import Layout from '../../components/widgets/Layout';
import Button from '../../components/control/Button';
import RequiredLogout from '..//../components/proteced/RequireLogout';
import authAPI from '../../api/auth';
import { updateUser } from './../../redux/actions/user';
import { login } from './../../redux/actions/auth';
import styles from './Login.module.scss';

function LoginPage() {
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(false);
    const router = useRouter();
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        if (formData.email === '' || formData.password === '') {
            return toast.warn('Vui lòng điền đầy đủ thông tin!');
        }

        setLoading(true);
        (async () => {
            try {
                const response = await authAPI.login(formData);
                // console.log(response);
                if (response.status === 'success') {
                    toast.success(response.message || 'Đăng nhập thành công');

                    // Luu thong tin nguoi dung
                    dispatch(updateUser(response.payload));

                    // Luu accessToken
                    dispatch(login(response.payload.accessToken));
                } else {
                    toast.warn(response.message || 'Đăng nhập thất bại');
                }
                setLoading(false);
            } catch (error) {
                console.log(error);
                setLoading(false);
                toast.error('Đăng nhập thất bại');
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
        <RequiredLogout>
            <div className={styles.container}>
                {loading && <Loading />}
                <div className="container">
                    <div className={styles.formContainer}>
                        <div className={styles.formHeader}>
                            <div className={styles.image}>
                                <Image src={logo} alt="logo" layout="fill" />
                            </div>
                            <p>
                                Bạn chưa có tài khoản?
                                <Link href="/signup">
                                    <a>Đăng kí</a>
                                </Link>
                            </p>
                        </div>
                        <h3>Đăng nhập</h3>
                        <form onSubmit={handleSubmit}>
                            <div className={styles.inputText}>
                                <input name="email" type="email" placeholder="Nhập email" onChange={handleChange} />
                            </div>
                            <div className={styles.inputPassword}>
                                <input
                                    name="password"
                                    type="password"
                                    placeholder="Nhập mật khẩu"
                                    onChange={handleChange}
                                />
                            </div>
                            <a href="#">Quên mật khẩu?</a>
                            <div className={styles.btn}>
                                <Button primary shadow rounded product>
                                    Đăng nhập
                                </Button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </RequiredLogout>
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
