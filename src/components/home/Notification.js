import React from "react";
import { Link } from "react-router-dom";

import styles from "./Notification.module.css";
import { NOTIFIACTIONS_DATA } from "../../data";

const Notification = () => {
  return (
    <div className={styles.notification}>
      <div className={styles.header}>
        <h3>Thông báo</h3>
      </div>
      <div className={styles.body}>
        <ul className={styles.list}>
          {NOTIFIACTIONS_DATA.map((item) => {
            return (
              <li key={item.id}>
                <Link to={item.path}>
                  <p>{item.content}</p>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Notification;
