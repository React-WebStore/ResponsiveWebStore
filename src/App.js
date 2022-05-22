import React, { useState } from "react";
import Item from "./Components/Item";
import DirectionSelector from "./Components/DirectionSelector";

import { Wrapper, Row, Column } from "./styles";
const App = () => {
  const [direction, setDirection] = useState("Column");

  const items = new Array(50);

  items.fill(<Item />);

  console.log(items);
  console.log(direction);
  return (
    <Wrapper>
      <DirectionSelector setDirection={setDirection} />
      {direction === "Row" ? (
        <Row>{items.map((item) => item)}</Row>
      ) : (
        <Column>{items.map((item) => item)}</Column>
      )}
    </Wrapper>
  );
};
export default App;
