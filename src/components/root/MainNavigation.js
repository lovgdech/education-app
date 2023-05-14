import React from "react";
import { Link } from "react-router-dom";

import styles from "./MainNavigation.module.css";
import LogoImg from "../../assets/images/logo.png";

const MainNavigation = () => {
  return (
    <header>
      <div className={styles.header}>
        <div className={styles.logo}>
          <img src={LogoImg} alt="logo" />
          <p>Đại học Sao Đỏ</p>
        </div>
        <nav>
          <div className={styles.menu}>
            <p></p>
            <p></p>
            <p></p>
          </div>
          <ul className={styles.list}>
            <li>
              <Link to="/">Trang chủ</Link>
            </li>
            <li>
              <Link to="/news">Tin tức</Link>
            </li>
            <li>
              <Link to="/game">Giải trí</Link>
            </li>
            <li>
              <Link to="/contact">Liên hệ</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default MainNavigation;
