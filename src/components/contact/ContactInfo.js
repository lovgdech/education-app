import React from "react";

import styles from "./ContactInfo.module.css";

const ContactInfo = () => {
  return (
    <div className={styles["contact-info"]}>
      <h3>Thông tin liên hệ</h3>
      <ul className={styles.list}>
        <li>
          <span>
            <i className="fa-solid fa-location-dot"></i>
            Địa chỉ
          </span>
          <p>Số 24, phố Thái Học 2, phường Sao Đỏ, Chí Linh, Hải Dương</p>
        </li>
        <li>
          <span>
            <i className="fa-solid fa-phone"></i>
            Số điện thoại
          </span>
          <p>0220 3882 269</p>
        </li>
        <li>
          <span>
            <i className="fa-solid fa-envelope"></i>
            Email
          </span>
          <p>info@saodo.edu.vn</p>
        </li>
      </ul>
      <hr></hr>
      <h3>Liên hệ</h3>
    </div>
  );
};

export default ContactInfo;
