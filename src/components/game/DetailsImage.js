import React from "react";

import styles from "./DetailsImage.module.css";
import { GAMEOPTIONS_DATA } from "../../data";

const DetailsImage = (props) => {
  return (
    <div className={styles["details-image"]}>
      <h3>
        {`${GAMEOPTIONS_DATA[props.imageNumber - 1].industry} ${
          props.imageNumber === 1 ? "" : "tại đại học sao đỏ"
        }`}
      </h3>
      <div className={styles.content}>
        <p>{GAMEOPTIONS_DATA[props.imageNumber - 1].details_content}</p>
      </div>
    </div>
  );
};

export default DetailsImage;
