import React from "react";
import { Directions, Direction } from "./styles";
const DirectionSelector = ({ setDirection = () => {} }) => (
  <Directions>
    <Direction
      onClick={() => setDirection("Row")}
      src="DoubleArrowLeftRight-512.webp"
    />
    <Direction
      onClick={() => setDirection("Column")}
      src="751136_multimedia_512x512.png"
    />
  </Directions>
);

export default DirectionSelector;
