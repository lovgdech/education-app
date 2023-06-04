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
  if (id === 0) {
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
    style = {
      ...style,
      outline: "1px solid white",
      outlineOffset: "-10px",
    };
  }

  return style;
};

export default TileView;
