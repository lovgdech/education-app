/* eslint-disable jsx-a11y/img-redundant-alt */
import { connect } from "react-redux";

import styles from "./Game.module.css";

const FullImage = (props) => {
  const imPath = `images/img${props.imageNumber}.png`;

  return (
    <div className={styles["full-image"]}>
      <img src={`${imPath}`} draggable="false" alt="Full image" />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    imageNumber: state.tileGame.imageNumber,
  };
};

const FullImageView = connect(mapStateToProps)(FullImage);

export default FullImageView;
