/* eslint-disable jsx-a11y/img-redundant-alt */
import styles from "./Game.module.css";
import { GAMEOPTIONS_DATA } from "../../data";

const FullImageView = (props) => {
  const imPath = `images/img${props.imageNumber}.png`;

  let classes = undefined;

  if (props.gameComplete === undefined) classes = "image-complete";

  return (
    <div className={styles["full-image"]}>
      <img
        className={styles[`${classes}`]}
        src={`${imPath}`}
        draggable="false"
        alt="Full image"
      />
      {props.gameComplete === false && (
        <h3>logo {GAMEOPTIONS_DATA[props.imageNumber - 1].industry}</h3>
      )}
    </div>
  );
};

export default FullImageView;
