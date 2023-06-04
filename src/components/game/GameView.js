import { connect } from "react-redux";
import PuzzleView from "./PuzzleView";
import FullImageView from "./FullImageView";
import RestartButtonsView from "./RestartButtonsView";
import { initGame } from "../../reducers/reducers";
import GameStatusView from "./GameStatusView";
import DetailsImage from "./DetailsImage";

import styles from "./Game.module.css";

const Game = (props) => {
  const editInputUserHandler = (values) => {
    const date = new Date();

    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();

    let currentDate = `${day}-${month}-${year}`;

    const rankingData = {
      ...values,
      date: currentDate,
      move: props.moves,
      gameId: props.gameId,
    };

    props.onAddRankingsUser(rankingData);
  };

  return (
    <div className={styles.game}>
      <GameStatusView onEditInputUser={editInputUserHandler} />
      <div className={styles.content}>
        <PuzzleView />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            height: "100%",
          }}
        >
          {!props.gameComplete && (
            <FullImageView
              imageNumber={props.imageNumber}
              gameComplete={props.gameComplete}
            />
          )}
          {props.gameComplete && (
            <DetailsImage imageNumber={props.imageNumber} />
          )}
        </div>
      </div>
      <RestartButtonsView
        onInitGame={props.onInitGame}
        imageNumber={props.imageNumber}
        onChangeImageNumber={props.onChangeImageNumber}
        onChangeHelp={props.onChangeHelp}
      />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    moves: state.tileGame.moves,
    gameId: state.tileGame.gameId,
    gameName: state.tileGame.gameName,
    highScoreList: state.tileGame.highScoreList,
    imageNumber: state.tileGame.imageNumber,
    gameComplete: state.tileGame.gameComplete,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onInitGame: (gameId, imageNumber) => {
      dispatch(
        initGame({
          gameId,
          imageNumber,
          doShuffling: true,
        })
      );
    },
  };
};

const GameView = connect(mapStateToProps, mapDispatchToProps)(Game);

export default GameView;
