import React, { useState } from "react";
import Item from "./Components/Item";
import DirectionSelector from "./Components/DirectionSelector";
import Cart from "./Components/Cart";

import { Wrapper, Direction } from "./styles";
const App = () => {
  const [direction, setDirection] = useState("column");

  const items = new Array(50);

  items.fill(<Item />);

  console.log(items);
  console.log(direction);
  return (
    <Wrapper>
      <Cart />
      <DirectionSelector setDirection={setDirection} />
      <Direction direction={direction}>{items.map((item) => item)}</Direction>
    </Wrapper>
  );
};
export default App;
