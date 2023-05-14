import styles from "./Game.module.css";

const TileView = ({
  id,
  size,
  tileWidth,
  isCorrectPos,
  imageNumber,
  onClick,
}) => (
  <div
    className={styles.tile}
    style={getStyleForTile(id, size, tileWidth, isCorrectPos, imageNumber)}
    onClick={() => onClick(id)}
  />
);

const getStyleForTile = (
  id: number,
  size: number,
  tileWidth: number,
  isCorrectPos: boolean,
  imageNumber: number
) => {
  //
  // Position a section of a background image in the tile
  // based on the id of the tile
  //
  if (id === 0) {
    // This is the blank tile
    // Show no image
    return {};
  }

  const idx = id - 1;
  const top = -Math.floor(idx / size) * tileWidth;
  const left = idx < size ? -idx * tileWidth : -(idx % size) * tileWidth;

  const imPath = `/images/img${imageNumber}.png`;
  let style: any = {
    backgroundPosition: `left ${left}px top ${top}px`,
    backgroundImage: `url('${imPath}')`,
  };

  if (isCorrectPos) {
    // Use a special style as a hint on that the tile is on
    // the correct position
    style = {
      ...style,
      outline: "1px solid white",
      outlineOffset: "-10px",
    };
  }

  return style;
};

export default TileView;
