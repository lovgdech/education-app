/* eslint-disable array-callback-return */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";

import styles from "./News.module.css";
import BannerBackground from "../../assets/images/banner-background.jpg";
import { NEWS_DATA } from "../../data";

const News = () => {
  return (
    <div className={styles.news}>
      <div className={styles.header}>
        <h3>Tin tức</h3>
        <p>Tất cả</p>
      </div>
      <div className={styles.row}>
        {NEWS_DATA.map((item, index) => {
          if (index < 4)
            return (
              <div key={item.id} className={styles.box}>
                <img src={BannerBackground} alt="image" />
                <div className={styles.body}>
                  <div className={styles.content}>
                    <button>Xem thêm</button>
                    <h3>{item.title}</h3>
                    <p>{item.content}</p>
                  </div>
                  <div className={styles.info}>
                    <div className={styles.auth}>
                      <div className={styles.avatar}>
                        <img src={BannerBackground} alt="image" />
                      </div>
                      <p>{item.authName}</p>
                    </div>
                    <div className={styles.interact}>
                      <div className={styles.view}>
                        <i className="fa-regular fa-eye"></i>
                        <p>{item.view}</p>
                      </div>
                      <div className={styles.comment}>
                        <i className="fa-regular fa-comment-dots"></i>
                        <p>{item.comment}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          if (index === 4)
            return (
              <div key={item.id} className={styles["box-t2"]}>
                <img src={BannerBackground} alt="image" />
                <div className={styles.body}>
                  <div className={styles.content}>
                    <button>Xem thêm</button>
                    <h3>{item.title}</h3>
                    <p>{item.content}</p>
                  </div>
                  <div className={styles.info}>
                    <div className={styles.auth}>
                      <div className={styles.avatar}>
                        <img src={BannerBackground} alt="image" />
                      </div>
                      <p>{item.authName}</p>
                    </div>
                    <div className={styles.interact}>
                      <div className={styles.view}>
                        <i className="fa-regular fa-eye"></i>
                        <p>{item.view}</p>
                      </div>
                      <div className={styles.comment}>
                        <i className="fa-regular fa-comment-dots"></i>
                        <p>{item.comment}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          if (index > 4)
            return (
              <div key={item.id} className={styles["box-t3"]}>
                <img src={BannerBackground} alt="image" />
                <div className={styles.content}>
                  <button>Xem thêm</button>
                  <h3>{item.title}</h3>
                </div>
              </div>
            );
        })}
      </div>
    </div>
  );
};

export default News;
