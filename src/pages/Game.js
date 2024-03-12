import React, { useCallback, useState, useEffect } from "react";

import GameOption from "../components/game/GameOption";
import GameView from "../components/game/GameView";
import tileGame from "../reducers/reducers";
import { initGame } from "../reducers/reducers";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import Rank from "../components/game/Rank";
import Help from "../components/game/Help";

const Game = () => {
  const [imageNumber, setImageNumber] = useState(null);
  const [rankUser, setRankUser] = useState([]);
  const [help, setHelp] = useState(false);

  const fetchRankingUserHander = useCallback(async () => {
    const respense = await fetch(
      "https://education-puzzle-image-default-rtdb.firebaseio.com/ranking.json"
    );
    const data = await respense.json();

    const loadedRanking = [];
    for (const key in data) {
      loadedRanking.push({
        id: key,
        studentId: data[key].studentId,
        name: data[key].name,
        class: data[key].class,
        move: data[key].move,
        date: data[key].date,
        gameId: data[key].gameId,
      });
    }
    loadedRanking.sort((a, b) => {
      return +a.move - +b.move;
    });
    setRankUser(loadedRanking);
  }, []);

  useEffect(() => {
    fetchRankingUserHander();
  }, [fetchRankingUserHander]);

  async function addRankingUserHander(user) {
    fetch(
      "https://education-puzzle-image-default-rtdb.firebaseio.com/ranking.json",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      }
    );
  }

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
          onAddRankingUser={addRankingUserHander}
          imageNumber={imageNumber}
          onChangeImageNumber={changeImageNumberHandler}
          onChangeHelp={changeHelp}
        />
      )}
      {imageNumber && (
        <Rank
          items={rankUser}
          fetchRankingUserHander={fetchRankingUserHander}
        />
      )}
    </Provider>
  );
};

export default Game;
