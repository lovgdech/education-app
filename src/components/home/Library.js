/* eslint-disable array-callback-return */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState } from "react";

import styles from "./Library.module.css";
import { LIBRARY_DATA } from "../../data";
import BannerBackground from "../../assets/images/banner-background.jpg";

const Library = () => {
  const [view, setView] = useState(4);

  const showMoreHandler = () => {
    setView(LIBRARY_DATA.length);
  };

  const showLessHandler = () => {
    setView(4);
  };

  return (
    <div className={styles.library}>
      <div className={styles.header}>
        <h3>Phóng sự ảnh</h3>
      </div>
      <div className={styles.body}>
        {LIBRARY_DATA.map((item, index) => {
          if (index < view)
            return (
              <div key={item.id} className={styles.box}>
                <div className={styles.image}>
                  <img src={BannerBackground} alt="image" />
                </div>
                <h3>{item.industry}</h3>
                <hr></hr>
              </div>
            );
        })}
        <div className={styles.show}>
          {view === 4 && <p onClick={showMoreHandler}>Xem thêm</p>}
          {view !== 4 && <p onClick={showLessHandler}>Ẩn bớt</p>}
        </div>
      </div>
    </div>
  );
};

export default Library;
