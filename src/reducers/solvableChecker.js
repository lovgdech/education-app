export function isSolvable(size: number, idArray: number[]): boolean {
  let invCount = getInvCount(size, idArray);

  if (size & 1) {
    return !(invCount & 1);
  } else {
    let rowFromBottom = findBlankRowPositionFromBottom(size, idArray);
    if (rowFromBottom & 1) return !(invCount & 1);
    else return !!(invCount & 1);
  }
}

function getInvCount(size: number, idArray: number[]) {
  let invCount = 0;
  for (let i = 0; i < size * size - 1; i++) {
    for (let j = i + 1; j < size * size; j++) {
      if (idArray[j] && idArray[i] && idArray[i] > idArray[j]) {
        invCount++;
      }
    }
  }
  return invCount;
}

function findBlankRowPositionFromBottom(size: number, idArray: number[]) {
  const blankTileIdx = idArray.findIndex((t) => t === 0);
  const row = Math.floor(blankTileIdx / size);
  let rowFromBottom = size - row;
  return rowFromBottom;
}
