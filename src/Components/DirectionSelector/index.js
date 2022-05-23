import React from "react";
import { Directions, Direction } from "./styles";
const DirectionSelector = ({ setDirection = () => {} }) => (
  <Directions>
    <Direction
      onClick={() => setDirection("row")}
      src="DoubleArrowLeftRight-512.webp"
    />
    <Direction
      onClick={() => setDirection("column")}
      src="751136_multimedia_512x512.png"
    />
  </Directions>
);

export default DirectionSelector;
