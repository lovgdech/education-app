/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

import styles from "./Interact.module.css";

const Interact = () => {
  return (
    <div className={styles.interact}>
      <div className={styles.header}>
        <h3>Các kênh thông tin</h3>
      </div>
      <div className={styles.body}>
        <ul className={styles.list}>
          <li className={styles["face-card"]}>
            <a href="#">
              <i className="fa-brands fa-facebook icon"></i>
            </a>
            <p>13.131 Members</p>
          </li>
          <li className={styles["tw-card"]}>
            <a href="#">
              <i className="fa-brands fa-twitter icon"></i>
            </a>
            <p>13.131 Followers</p>
          </li>
          <li className={styles["is-card"]}>
            <a href="#">
              <i className="fa-brands fa-instagram icon"></i>
            </a>
            <p>13.131 Followers</p>
          </li>
          <li className={styles["yt-card"]}>
            <a href="#">
              <i className="fa-brands fa-youtube icon"></i>
            </a>
            <p>13.131 Subscribers</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Interact;
