/* eslint-disable linebreak-style */
import styles from "./Game.module.css";

const RestartButtonsView = (props) => (
  <div className={styles.button}>
    <button onClick={() => props.onInitGame(props.imageNumber)}>Đặt lại</button>
    <button
      onClick={() => {
        props.onChangeImageNumber(null);
      }}
    >
      Chọn hình
    </button>
  </div>
);

export default RestartButtonsView;
