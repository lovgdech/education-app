/* eslint-disable linebreak-style */
import { connect } from "react-redux";
import { GameId_3x3, GameId_4x4, GameId_5x5 } from "../../reducers/constants";

import styles from "./Game.module.css";

const RestartButtons = (props) => (
  <div className={styles.button}>
    <button
      onClick={() => {
        props.onChangeImageNumber(null);
      }}
    >
      Chọn hình
    </button>
    <button onClick={() => props.onInitGame(GameId_3x3, props.imageNumber)}>
      Chơi 3x3
    </button>
    <button onClick={() => props.onInitGame(GameId_4x4, props.imageNumber)}>
      Chơi 4x4
    </button>
    <button onClick={() => props.onInitGame(GameId_5x5, props.imageNumber)}>
      Chơi 5x5
    </button>
  </div>
);

const mapStateToProps = (state) => {
  return {
    gameComplete: state.tileGame.gameComplete,
    imageNumber: state.tileGame.imageNumber,
  };
};

const RestartButtonsView = connect(mapStateToProps)(RestartButtons);

export default RestartButtonsView;
