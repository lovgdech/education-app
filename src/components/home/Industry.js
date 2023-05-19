/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import styles from "./Industry.module.css";
import "swiper/css";
import { INDUSTRYS_DATA } from "../../data";
import { Autoplay } from "swiper";

const AboutIndustry = () => {
  return (
    <div className={styles.industry}>
      <div className={styles.header}>
        <h3>Khoa & Ban Ngành</h3>
        <div className={styles["header-button"]}>
          <button>
            <i className="fa-solid fa-angle-left"></i>
          </button>
          <button>
            <i className="fa-solid fa-angle-right"></i>
          </button>
        </div>
      </div>
      <div className={styles.row}>
        <Swiper
          watchSlidesProgress={true}
          slidesPerView={4}
          spaceBetween={30}
          centeredSlides={false}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
          className="mySwiper"
        >
          {INDUSTRYS_DATA.map((industry) => {
            return (
              <SwiperSlide key={industry.id} className={styles.box}>
                <img src={industry.image} alt="Image" />
                <div className={styles.content}>
                  <button>{industry.industry}</button>
                  <p>{industry.title}</p>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default AboutIndustry;
