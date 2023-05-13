/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/iframe-has-title */
import React from "react";
import { Link } from "react-router-dom";

import styles from "./Footer.module.css";

function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.content}>
        <div className={styles.about}>
          <div className={styles.contact}>
            <h3> Trường Đại học Sao Đỏ</h3>
            <ul className={styles["contact-list"]}>
              <li>
                <i className="fa-solid fa-location-dot"></i>
                <p>Số 24, phố Thái Học 2, phường Sao Đỏ, Chí Linh, Hải Dương</p>
              </li>
              <li>
                <i className="fa-solid fa-phone"></i>
                <p>0220 3882 269</p>
              </li>
              <li>
                <i className="fa-solid fa-envelope"></i>
                <p>info@saodo.edu.vn</p>
              </li>
              <li>
                <p>Website:</p>
                <a href="http://saodo.edu.vn/">http://saodo.edu.vn/</a>
              </li>
            </ul>
          </div>
          <div className={styles.follow}>
            <h3>Theo dõi chúng tôi</h3>
            <ul className={styles["follow-list"]}>
              <li>
                <a href="www.facebook.com/TruongDHSaoDo/">
                  <i className="fa-brands fa-facebook"></i>
                </a>
              </li>
              <li>
                <a href="">
                  <i className="fa-brands fa-twitter icon"></i>
                </a>
              </li>
              <li>
                <a href="">
                  <i className="fa-brands fa-instagram"></i>
                </a>
              </li>
              <li>
                <a href="">
                  <i className="fa-brands fa-youtube"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.admission}>
          <h3>Tuyển sinh & Đào tạo</h3>
          <ul className={styles["admission-list"]}>
            <li>
              <Link to="">Thông tin tuyển sinh</Link>
            </li>
            <li>
              <Link to="">Đào tạo đại học</Link>
            </li>
            <li>
              <Link to="">Đào tạo sau đại học</Link>
            </li>
            <li>
              <Link to="">Đào tạo liên thông</Link>
            </li>
          </ul>
        </div>
        <div className={styles.industrys}>
          <h3>Khoa & Ban ngành</h3>
          <ul className={styles["industrys-list"]}>
            <li>
              <Link to="">Công nghệ thông tin</Link>
            </li>
            <li>
              <Link to="">Ô tô</Link>
            </li>
            <li>
              <Link to="">Cơ khí</Link>
            </li>
            <li>
              <Link to="">Điện</Link>
            </li>
            <li>
              <Link to="">Kinh tế</Link>
            </li>
            <li>
              <Link to="">Du lịch và ngoại ngữ</Link>
            </li>
            <li>
              <Link to="">Thực phẩm</Link>
            </li>
          </ul>
        </div>
        <div className={styles.location}>
          <h3>Bản đồ chỉ dẫn</h3>
          <iframe
            className={styles.map}
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3722.05802327291!2d106.39146647500246!3d21.11025278497511!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31357909df4b3bff%3A0xd8784721e55d91ca!2zVHLGsOG7nW5nIMSQ4bqhaSBo4buNYyBTYW8gxJDhu48!5e0!3m2!1svi!2s!4v1682605014459!5m2!1svi!2s"
            loading="lazy"
          ></iframe>
        </div>
      </div>
      <div className={styles.copyright}>
        <p>
          <span>@ </span>Bản quyền thuộc về Trường Đại học Sao Đỏ
        </p>
      </div>
    </div>
  );
}

export default Footer;
