import React, { useState } from "react";

import GameOption from "../components/game/GameOption";
import GameView from "../components/game/GameView";
import tileGame from "../reducers/reducers";
import { GameId_3x3 } from "../reducers/constants";
import { initGame } from "../reducers/reducers";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import Rank from "../components/game/Rank";
import Help from "../components/game/Help";

const DUMMY_RANK = [
  {
    id: "2100878",
    name: "nguyễn đặng long",
    class: "dk12-cntt2",
    move: "25",
    date: "25-5-2023",
    gameId: GameId_3x3,
  },
  {
    id: "2100879",
    name: "bùi quý đạt",
    class: "dk12-cntt2",
    move: "26",
    date: "25-5-2023",
    gameId: GameId_3x3,
  },
  {
    id: "2100880",
    name: "vũ thị bắc",
    class: "dk12-cntt2",
    move: "75",
    date: "25-5-2023",
    gameId: GameId_3x3,
  },
];

const Game = () => {
  const [imageNumber, setImageNumber] = useState(null);
  const [rankUser, setRankUser] = useState(DUMMY_RANK);
  const [help, setHelp] = useState(false);

  const addRankingUserHander = (user) => {
    setRankUser((prevUser) => {
      return [user, ...prevUser].sort((a, b) => {
        return +a.move - +b.move;
      });
    });
  };

  const changeHelp = () => {
    setHelp(!help);
  };

  const changeImageNumberHandler = (imageNumber) => {
    setImageNumber(imageNumber);
  };

  const store = configureStore({
    reducer: {
      tileGame,
    },
  });

  store.dispatch(
    initGame({
      gameId: 0,
      imageNumber: imageNumber,
      doShuffling: true,
    })
  );

  return (
    <Provider store={store}>
      {help && <Help onChangeHelp={changeHelp} />}
      {!imageNumber && (
        <GameOption onChangeImageNumber={changeImageNumberHandler} />
      )}
      {imageNumber && (
        <GameView
          onAddRankingsUser={addRankingUserHander}
          imageNumber={imageNumber}
          onChangeImageNumber={changeImageNumberHandler}
          onChangeHelp={changeHelp}
        />
      )}
      {imageNumber && <Rank items={rankUser} />}
    </Provider>
  );
};

export default Game;
