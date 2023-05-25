/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Autoplay } from "swiper";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import styles from "./GameOption.module.css";
import { GAMEOPTIONS_DATA } from "../../data";

const GameOption = (props) => {
  return (
    <div className={styles.game}>
      <div className={styles.title}>
        <h2>Trò chơi xếp hình logo</h2>
        <span>Chọn hình ảnh bạn muốn chơi</span>
      </div>
      <div className={styles.row}>
        <Swiper
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          slidesPerView={3}
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={false}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={true}
          modules={[EffectCoverflow, Pagination, Autoplay]}
          className="mySwiper"
        >
          {GAMEOPTIONS_DATA.map((item, index) => {
            return (
              <SwiperSlide key={item.id} className={styles.box}>
                <div className={styles.header}>
                  <img src={item.image} />
                </div>
                <div className={styles.content}>
                  <h3>{item.industry}</h3>
                  <p>{item.content}</p>
                  <button
                    onClick={() => {
                      props.onChangeImageNumber(index + 1);
                    }}
                  >
                    Chơi ngay
                  </button>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default GameOption;
