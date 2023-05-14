import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import styles from "./Banner.module.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import BannerBackground from "../../assets/images/banner-background.jpg";
import { Autoplay, Pagination, Navigation } from "swiper";
import { SLIDES_DATA } from "../../data";

const Banner = () => {
  return (
    <div className={styles.banner}>
      <div className={styles.overlay}>
        <div
          className={styles.slide}
          style={{
            backgroundImage: `url(${BannerBackground})`,
            backgroundSize: "cover",
            backgroundPosition: "left, center",
          }}
        >
          <div className={styles["slide-content"]}>
            <Swiper
              spaceBetween={30}
              centeredSlides={true}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              // pagination={{
              //   clickable: true,
              // }}
              navigation={false}
              modules={[Autoplay, Pagination, Navigation]}
              className="mySwiper"
            >
              {SLIDES_DATA.map((slide) => {
                return (
                  <SwiperSlide
                    className={styles["slide-content"]}
                    key={slide.id}
                  >
                    <div className={styles.title}>
                      <h3>Trường Đại học Sao Đỏ</h3>
                      <span>{slide.title}</span>
                    </div>

                    <p>{slide.content}</p>
                    <div className={styles.button}>
                      <button>Đọc thêm</button>
                      <button>Liên hệ</button>
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
