import React from "react";

import styles from "./Footer.module.scss";
import btnAppStore from "./../../../assets/images/btnAppStore.svg";
import btnGooglePlay from "./../../../assets/images/btnGooglePlay.svg";
import Image from "next/image";

import FooterItemContact from "./Footer.itemContact";
import { BsHeadset } from "react-icons/bs";
import { GoMailRead } from "react-icons/go";
import { FaFacebookF } from "react-icons/fa";
import Link from "next/link";

function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.footerTop}>
        <div className="container">
          <div className={styles.main}>
            <FooterItemContact
              Icon={BsHeadset}
              title="Hotline"
              contact="1900 1009"
            />
            <FooterItemContact
              Icon={GoMailRead}
              title="Email Hỗ trợ"
              contact="cskh@gmail.com"
            />
            <FooterItemContact
              Icon={FaFacebookF}
              title="Facebook"
              contact="facebook.com"
            />
          </div>
        </div>
      </div>

      <div className={styles.footerBottom}>
        <div className="container">
          <div className={styles.main}>
            <div className={styles.footerItem}>
              <h3>THÔNG TIN LIÊN HỆ</h3>
              <ul>
                <li>
                  <span>Tên công ty</span>
                  <p>Công ty cổ phần ANEED</p>
                </li>
                <li>
                  <span>Địa chỉ</span>
                  <p>
                    Tầng 7, số 67 Khúc Thừa Dụ, <br /> Dịch Vọng Hậu, Cầu Giấy,
                    Hà Nội
                  </p>
                </li>
                <li>
                  <span>Hotline</span>
                  <p>1900 1009</p>
                </li>
                <li>
                  <span>Thời gian hỗ trợ</span>
                  <p>8h - 22h hằng ngày</p>
                </li>
              </ul>
            </div>
            <div className={styles.footerItem}>
              <h3>CHÍNH SÁCH CHƯƠNG TRÌNH</h3>
              <ul>
                <li>
                  <Link href="/">
                    <span>Giới thiệu về DUACA</span>
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <span>Quy chế hoạt động</span>
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <span>Chính sách chương trình</span>
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <span>Điều khoản và điều kiện</span>
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <span>Bảo mật và chia sẻ thông tin</span>
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <span>Điều khoản và điều kiện ví điện tử</span>
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <span>Chính sách biểu phí ví điện tử</span>
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <span>Điều khoản và đièu kiện giao dịch</span>
                  </Link>
                </li>
              </ul>
            </div>
            <div className={styles.footerItem}>
              <h3>BẤM LIKE ĐỂ NHẬN NGAY ƯU ĐÃI</h3>
              <div className={styles.iframe}>
                <iframe
                  src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fmixigaming&amp;
                  tabs=timeline&amp;
                  width=500&amp;
                  height=500&amp;
                  small_header=false&amp;
                  adapt_container_width=true&amp;
                  hide_cover=false&amp;
                  show_facepile=false&amp;
                  appId=339596584440998"
                  scrolling="no"
                  width="100%"
                  height="158px"
                  allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                ></iframe>
              </div>
              <h3>TẢI ỨNG DỤNG DUACA</h3>
              <div className={styles.btns}>
                <button className={styles.btn}>
                  <Image
                    src={btnGooglePlay}
                    alt="anh app store"
                    layout="fill"
                  />
                </button>
                <button className={styles.btn}>
                  <Image src={btnAppStore} alt="anh app store" layout="fill" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
