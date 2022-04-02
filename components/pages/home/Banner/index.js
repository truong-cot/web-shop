import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import styles from "./Banner.module.scss";
import imgBanner1 from "./../../../../assets/images/banner1.svg";
import imgBanner2 from "./../../../../assets/images/banner2.svg";
import imgSlider1 from "./../../../../assets/images/banner1.svg";
import imgSlider2 from "./../../../../assets/images/banner1.svg";
import imgSlider3 from "./../../../../assets/images/banner1.svg";
import imgSlider4 from "./../../../../assets/images/banner1.svg";

function Banner() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className={styles.main}>
      <div className="container">
        <div className={styles.banner}>
          <div className={styles.bannerItem}>
            <div className={styles.imgItem}>
              <img src={imgBanner1.src} alt="anh header 1" />
            </div>
            <div className={styles.imgItem}>
              <img src={imgBanner2.src} alt="anh header 2" />
            </div>
          </div>

          <div className={styles.bannerItem}>
            <Slider {...settings}>
              <div className={styles.imgSlider}>
                <img src={imgSlider1.src} alt="anh slider" />
              </div>
              <div className={styles.imgSlider}>
                <img src={imgSlider2.src} alt="anh slider" />
              </div>
              <div className={styles.imgSlider}>
                <img src={imgSlider3.src} alt="anh slider" />
              </div>
              <div className={styles.imgSlider}>
                <img src={imgSlider4.src} alt="anh slider" />
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
