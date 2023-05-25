import React, { useState } from "react";

import GameOption from "../components/game/GameOption";
import GameView from "../components/game/GameView";
import tileGame from "../reducers/reducers";
import { GameId_3x3 } from "../reducers/constants";
import { initGame } from "../reducers/reducers";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import Rank from "../components/game/Rank";

const DUMMY_RANK = [
  {
    id: "2100878",
    name: "nguyen dang long",
    class: "dk12-cntt2",
    move: "25",
    date: "25-05-2023",
    gameId: GameId_3x3,
  },
  // {
  //   id: "2100879",
  //   name: "nguyen dang long",
  //   class: "dk12-cntt2",
  //   move: "55",
  //   date: "25-05-2023",
  //   gameId: GameId_4x4,
  // },
  // {
  //   id: "2100880",
  //   name: "nguyen dang long",
  //   class: "dk12-cntt2",
  //   move: "75",
  //   date: "25-05-2023",
  //   gameId: GameId_5x5,
  // },
];

const Game = () => {
  const [imageNumber, setImageNumber] = useState(null);
  const [rankUser, setRankUser] = useState(DUMMY_RANK);

  const addRankingUserHander = (user) => {
    setRankUser((prevUser) => {
      return [user, ...prevUser].sort((a, b) => {
        return +a.move - +b.move;
      });
    });
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
      {!imageNumber && (
        <GameOption onChangeImageNumber={changeImageNumberHandler} />
      )}
      {imageNumber && (
        <GameView
          onAddRankingsUser={addRankingUserHander}
          imageNumber={imageNumber}
          onChangeImageNumber={changeImageNumberHandler}
        />
      )}
      <Rank items={rankUser} />
    </Provider>
  );
};

export default Game;
