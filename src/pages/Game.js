import React, { useState } from "react";

import GameOption from "../components/game/GameOption";
import GameView from "../components/game/GameView";
import tileGame from "../reducers/reducers";
import { initGame } from "../reducers/reducers";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";

const Game = () => {
  const [imageNumber, setImageNumber] = useState(null);

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
          imageNumber={imageNumber}
          onChangeImageNumber={changeImageNumberHandler}
        />
      )}
    </Provider>
  );
};

export default Game;
