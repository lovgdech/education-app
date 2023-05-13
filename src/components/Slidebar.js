import React from "react";

import styles from ".//Slidebar.module.css";
import Interact from "./Interact";
import Library from "./Library";
import Dedication from "./Dedication";
import Notification from "./Notification";

const Slidebar = () => {
  return (
    <div className={styles.slidebar}>
      <Interact />
      <Notification />
      <Dedication />
      <Library />
    </div>
  );
};

export default Slidebar;
