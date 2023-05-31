import {
  generateTileSet,
  swapTilesInSet,
  allTilesAreAligned,
  tileIsValidForMovement,
} from "./tileset-functions";
import { gameConfigs } from "./game-configs";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  moves: 0,
  gameComplete: false,
  imageNumber: undefined,
  tiles: [],
  size: undefined,
  gameId: undefined,
  gameName: undefined,
  userName: undefined,
  userId: undefined,
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
      state.tiles = generateTileSet(
        gameConfigs[payload.gameId].size,
        payload.doShuffling
      );
      state.size = gameConfigs[payload.gameId].size;
      state.gameId = payload.gameId;
      state.gameName = gameConfigs[payload.gameId].name;
      state.highScoreListId = gameConfigs[payload.gameId].highscorelistid;
    },

    // hàm nhận vào click người chơi sau đó sử lý: đổi chổ mảnh + tăng số bước + check đã hoàn thành hay chưa
    moveTile(state, action) {
      if (
        state.gameComplete ||
        !tileIsValidForMovement(action.payload.id, state.size, state.tiles)
      ) {
        return state;
      }

      // tăng số bước
      state.moves = state.moves + 1;

      // đổi chổ
      state.tiles = swapTilesInSet(state.tiles, emptyTileId, action.payload.id);

      // check win
      state.gameComplete = allTilesAreAligned(state.tiles);
    },

    // hàm người dùng chọn logo khoa để chơi
    imageChange(state, action) {
      state.imageNumber = action.payload.imageNumber;
    },

    // hàm nhận thông tin người dùng sau khi trò chơi hoàn thành
    nameSubmitted(state) {
      state.nameSubmitted = true;
    },
  },
});

export const { initGame, moveTile, imageChange, nameSubmitted } =
  gameSlice.actions;
export default gameSlice.reducer;
