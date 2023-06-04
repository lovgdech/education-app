import shuffle from "shuffle-array"; // thư viện dùng Xáo trộn mảng
import { isSolvable } from "./solvableChecker";

export function generateTileSet(size: number, doShuffling: boolean): number[] {
  let newTilesArray: number[] = [];

  // Gán giá trị các phần tử của mảng từ 1 đến 9
  for (let i = 0; i < size * size; i++) {
    newTilesArray[i] = i + 1;
  }

  // gán giá trị ô trống trong mảng là 9(arr[8])
  const blankTileIdx = size * size - 1;
  newTilesArray[blankTileIdx] = 0;

  if (doShuffling) {
    // khởi tạo trạng thái game với giá trị chưa hoàn thành
    let solvable = false;

    while (!solvable) {
      // xáo trộn các mảnh ghép
      newTilesArray = shuffle(newTilesArray);

      solvable = isSolvable(size, newTilesArray);
    }
  }

  // trả về một mảng từ 0 -> 8 vs giá trị từ 1 -> 9
  return newTilesArray;
}

// đổi chỗ mảnh click với mảnh trắng
export function swapTilesInSet(
  tiles: number[],
  sourceId: number,
  destId: number
): number[] {
  // tìm vị trị của mảnh trắng trong mảng
  let sourceIdx = tiles.findIndex((t) => t === sourceId);
  let source = tiles[sourceIdx];

  // tìm vị trí mảnh người chơi click trong mảng
  let destIdx = tiles.findIndex((t) => t === destId);
  let dest = tiles[destIdx];

  // đổi giá trị hai phần tử
  tiles[destIdx] = source;
  tiles[sourceIdx] = dest;

  return tiles;
}

// trả về true nếu thứ tự các mảnh là đúng và false nếu thứ tự các mảnh là sai // hàm check win
export function allTilesAreAligned(tiles: number[]): boolean {
  for (let i = 0; i < tiles.length; i++) {
    if (tiles[i] !== 0 && tiles[i] !== i + 1) {
      return false;
    }
  }
  return true;
}

// hàm kiểm tra xem các mảnh có là hợp lệ nếu hợp lệ sẽ gọi hàm xử lý di chuyển mảnh
export function tileIsValidForMovement(
  id: number,
  size: number,
  tiles: number[]
): boolean {
  if (id < 1 || id > size * size - 1) {
    return false;
  }

  // gọi hàm xử lý di chuyển mảnh
  return tileIsMovable(size, id, tiles);
}

// hàm xử lý di chuyển mảnh
export function tileIsMovable(
  size: number,
  id: number,
  tiles: number[]
): boolean {
  // vị trí mảnh trắng trong mảng từ 0 -> 8
  const idx = tiles.findIndex((t) => t === id);

  // cho biết vị trí mảnh trắng thuộc hàng nào
  const row = Math.floor(idx / size);

  // vị trí mảnh trắng ở hàng trên và giữa
  if (row < size - 1) {
    if (tiles[idx + size] === 0) {
      return true;
    }
  }

  // vị trí mảnh trắng ở hàng dưới và giữa
  if (row > 0) {
    if (tiles[idx - size] === 0) {
      return true;
    }
  }
  const col = idx % size;

  // vị trí mảnh trắng ở cột giữa và phải
  if (col < size - 1) {
    if (tiles[idx + 1] === 0) {
      return true;
    }
  }

  // vị trí mảnh trắng ở cột giữa và trái
  if (col > 0) {
    if (tiles[idx - 1] === 0) {
      return true;
    }
  }

  return false;
}
