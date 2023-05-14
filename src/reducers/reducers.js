/* eslint-disable no-useless-rename */
import {
  generateTileSet,
  swapTilesInSet,
  allTilesAreAligned,
  getIndexInHighScoreList,
  tileIsValidForMovement,
} from "./tileset-functions";
import { v4 as uuidv4 } from "uuid";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  moves: 0,
  gameComplete: false,
  imageNumber: 1,
  tiles: [],
  size: undefined,
  gameId: undefined,
  gameName: undefined,
  highScoreList: undefined,
  highScorePosition: -1,
  userName: undefined,
  userId: undefined,
  highScoreListSaved: false,
  nameSubmitted: false,
  highScoreListId: -1,
};

const emptyTileId = 0;

const gameSlice = createSlice({
  name: "tileGame",
  initialState: initialState,
  reducers: {
    initGame(state, action) {
      const payload = action.payload;

      Object.assign(state, initialState);
      state.imageNumber = payload.imageNumber;
      state.tiles = generateTileSet(3, payload.doShuffling);

      state.size = 3;
      state.gameId = payload.gameId;
    },

    moveTile(state, action) {
      if (
        state.gameComplete ||
        !tileIsValidForMovement(action.payload.id, state.size, state.tiles)
      ) {
        return state;
      }

      state.moves = state.moves + 1;
      state.tiles = swapTilesInSet(state.tiles, emptyTileId, action.payload.id);
      state.gameComplete = allTilesAreAligned(state.tiles);

      if (state.gameComplete && state.highScoreList) {
        const newUserId = uuidv4();

        const time = Date.now();

        const idxInHighScoreList = getIndexInHighScoreList(
          newUserId,
          time,
          state.moves,
          state.highScoreList
        );

        if (idxInHighScoreList > -1) {
          state.highScorePosition = idxInHighScoreList + 1;
          state.userId = newUserId;
        }
      }
    },

    highScoreListLoaded(state, action) {
      state.highScoreList = action.payload.highScoreList;
    },

    nameChanged(state, action) {
      state.userName = action.payload.name;
    },

    highScoreListSaved(state, action) {
      state.highScoreListSaved = true;
      state.highScoreList = action.payload.highScoreList;
    },

    nameSubmitted(state) {
      state.nameSubmitted = true;
    },
  },
});

export const {
  initGame: initGame,
  moveTile: moveTile,
  highScoreListLoaded,
  nameChanged,
  highScoreListSaved,
  nameSubmitted,
} = gameSlice.actions;

export default gameSlice.reducer;
