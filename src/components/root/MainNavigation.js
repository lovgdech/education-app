import React from "react";
import { NavLink } from "react-router-dom";

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
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? styles.active : undefined
                }
                end
              >
                Trang chủ
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/news"
                className={({ isActive }) =>
                  isActive ? styles.active : undefined
                }
              >
                Tin tức
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/game"
                className={({ isActive }) =>
                  isActive ? styles.active : undefined
                }
              >
                Giải trí
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive ? styles.active : undefined
                }
              >
                Liên hệ
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default MainNavigation;
