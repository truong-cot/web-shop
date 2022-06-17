import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { BsHeadset } from 'react-icons/bs';
import { GoMailRead } from 'react-icons/go';
import { FaFacebookF } from 'react-icons/fa';

import btnGooglePlay from './../../../assets/images/btnGooglePlay.svg';
import btnAppStore from './../../../assets/images/btnAppStore.svg';

import FooterItemContact from './Footer.itemContact';
import styles from './Footer.module.scss';

function Footer() {
    return (
        <div className={styles.footer}>
            <div className={styles.footerTop}>
                <div className="container">
                    <div className={styles.main}>
                        <FooterItemContact Icon={BsHeadset} title="Hotline" contact="1900 1009" />
                        <FooterItemContact Icon={GoMailRead} title="Email Hỗ trợ" contact="cskh@gmail.com" />
                        <FooterItemContact Icon={FaFacebookF} title="Facebook" contact="facebook.com" />
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
                                    <p>Công ty cổ phần ...</p>
                                </li>
                                <li>
                                    <span>Địa chỉ</span>
                                    <p>
                                        HVNNVN, Trâu Quỳ, <br /> Gia Lâm, Hà Nội
                                    </p>
                                </li>
                                <li>
                                    <span>Hotline</span>
                                    <p>1900 1009</p>
                                </li>
                                <li>
                                    <span>Thời gian hỗ trợ</span>
                                    <p>7h - 22h hằng ngày</p>
                                </li>
                            </ul>
                        </div>
                        <div className={styles.footerItem}>
                            <h3>CHÍNH SÁCH CHƯƠNG TRÌNH</h3>
                            <ul>
                                <li>
                                    <Link href="/">
                                        <span>Giới thiệu về ...</span>
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
                                {/* <iframe
                  src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Ftruongcot.1609%2F&tabs=timeline&width=0&height=0&small_header=true&adapt_container_width=true&hide_cover=true&show_facepile=true&appId"
                  style={{
                    border: "none",
                    overflow: "hidden",
                    height: "500px",
                    width: "500px",
                  }}
                  scrolling="no"
                  frameborder="0"
                  allowfullscreen="true"
                  allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                ></iframe> */}
                            </div>
                            <h3>TẢI ỨNG DỤNG ...</h3>
                            <div className={styles.btns}>
                                <button className={styles.btn}>
                                    <Image src={btnGooglePlay} alt="anh app store" layout="fill" />
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
