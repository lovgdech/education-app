import { connect } from "react-redux";
import PuzzleView from "./PuzzleView";
import FullImageView from "./FullImageView";
import RestartButtonsView from "./RestartButtonsView";
import { initGame } from "../../reducers/reducers";
import GameStatusView from "./GameStatusView";

import styles from "./Game.module.css";

const Game = (props) => {
  return (
    <div className={styles.game}>
      <GameStatusView />
      <div className={styles.content}>
        <PuzzleView />
        <FullImageView />
      </div>
      <RestartButtonsView
        onInitGame={props.onInitGame}
        imageNumber={props.imageNumber}
        onChangeImageNumber={props.onChangeImageNumber}
      />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    gameName: state.tileGame.gameName,
    highScoreList: state.tileGame.highScoreList,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onInitGame: (gameId) => {
      dispatch(
        initGame({
          gameId,
          imageNumber: gameId,
          doShuffling: true,
        })
      );
    },
  };
};

const GameView = connect(mapStateToProps, mapDispatchToProps)(Game);

export default GameView;
