import React from 'react';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from './Banner.module.scss';

function Banner() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1000,
    };

    return (
        <div className={styles.main}>
            <div className="container">
                <div className={styles.banner}>
                    <div className={styles.bannerItem}>
                        <div className={styles.imgItem}>
                            <img
                                src="https://images.pexels.com/photos/999267/pexels-photo-999267.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                alt="anh header 1"
                            />
                        </div>
                        <div className={styles.imgItem}>
                            <img
                                src="https://images.pexels.com/photos/1082528/pexels-photo-1082528.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                alt="anh header 2"
                            />
                        </div>
                    </div>

                    <div className={styles.bannerItem}>
                        <Slider {...settings}>
                            <div className={styles.imgSlider}>
                                <img
                                    src="https://images.pexels.com/photos/994523/pexels-photo-994523.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                    alt="anh slider"
                                />
                            </div>
                            <div className={styles.imgSlider}>
                                <img
                                    src="https://images.pexels.com/photos/994517/pexels-photo-994517.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                    alt="anh slider"
                                />
                            </div>
                            <div className={styles.imgSlider}>
                                <img
                                    src="https://images.pexels.com/photos/1884584/pexels-photo-1884584.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                    alt="anh slider"
                                />
                            </div>
                            <div className={styles.imgSlider}>
                                <img
                                    src="https://images.pexels.com/photos/1884583/pexels-photo-1884583.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                    alt="anh slider"
                                />
                            </div>
                        </Slider>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Banner;
