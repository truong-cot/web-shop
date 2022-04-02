import React from "react";
import Layout from "../../components/widgets/Layout";
import styles from "./Signup.module.scss";
import Image from "next/image";
import Link from "next/link";
import logo from "./../../assets/images/logo.svg";
import Button from "../../components/control/Button";
function LoginPage() {
  return (
    <div className={styles.container}>
      <div className="container">
        <div className={styles.formContainer}>
          <div className={styles.formHeader}>
            <div className={styles.image}>
              <Image src={logo} alt="logo" layout="fill" />
            </div>
            <p>
              Bạn đã có tài khoản?{" "}
              <Link href="/login">
                <a>Đăng nhập</a>
              </Link>
            </p>
          </div>
          <h3>Đăng ký</h3>
          <form>
            <div className={styles.inputGroup}>
              <div className={styles.inputText}>
                <input type="text" placeholder="Nhập số điện thoại" />
              </div>
              <div className={styles.inputText}>
                <input type="text" placeholder="Nhập mã ID" />
              </div>
            </div>

            <div className={styles.inputGroup}>
              <div className={styles.inputPassword}>
                <input type="password" placeholder="Nhập mật khẩu" />
              </div>
              <div className={styles.inputPassword}>
                <input type="password" placeholder="Nhập lại mật khẩu" />
              </div>
            </div>

            <p>
              Bằng việc đăng ký tham gia là bạn đã chấp nhận{" "}
              <a href="#">điều khoản và chính sách</a> của chúng tôi
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
