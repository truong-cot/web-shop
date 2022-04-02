import React from "react";
import Layout from "../../components/widgets/Layout";
import styles from "./Login.module.scss";
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
              Bạn chưa có tài khoản?{" "}
              <Link href="/signup">
                <a>Đăng kí</a>
              </Link>
            </p>
          </div>
          <h3>Đăng nhập</h3>
          <form>
            <div className={styles.inputText}>
              <input type="text" placeholder="Nhập số điện thoại" />
            </div>
            <div className={styles.inputPassword}>
              <input type="password" placeholder="Nhập mật khẩu" />
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
