import { connect } from "react-redux";

import styles from "./Game.module.css";
import EnterName from "./EnterName";

const GameStatus = (props) => {
  if (props.gameComplete) {
    return (
      <div className={styles["game-status"]}>
        <div>
          <h3>Hoàn thành!</h3>
          <p>Bạn đã mất {props.moves} bước để hoàn thành.</p>
        </div>
        <EnterName onAddRankingsUser={props.onEditInputUser} />
      </div>
    );
  } else {
    return (
      <div className={styles["game-status"]}>
        <>
          <h3>
            Số bước: <span>{props.moves}</span>
          </h3>
          <p>Click vào mảnh ghép để di chuyển!</p>
        </>
      </div>
    );
  }
};

const mapStateToProps = (state) => {
  return {
    moves: state.tileGame.moves,
    gameComplete: state.tileGame.gameComplete,
    highScorePosition: state.tileGame.highScorePosition,
    highScoreListSaved: state.tileGame.highScoreListSaved,
    highScoreList: state.tileGame.highScoreList,
    userId: state.tileGame.userId,
  };
};

const GameStatusView = connect(mapStateToProps)(GameStatus);

export default GameStatusView;
