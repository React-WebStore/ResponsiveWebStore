import React, { useState, useContext, useEffect } from "react";
import Item from "./Components/Item";
import DirectionSelector from "./Components/DirectionSelector";
import Cart from "./Components/Cart";
import { contextState } from "./Services/context";
import { Wrapper, Direction } from "./styles";
const App = ({ inventory }) => {
  const [direction, setDirection] = useState("column");
  const store = useContext(contextState);
  console.log({ store });
  const { items } = store.state;
  console.log({ items });

  console.log(items);
  console.log(direction);

  useEffect(() => {
    // testing purposes only
    const arr = new Array(50);
    arr.fill({ title: "patrick", price: 15000, img: "cart.png" });

    store.dispatch({ type: "initializeInventory", payload: inventory || arr });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Wrapper>
      <Cart />
      <DirectionSelector setDirection={setDirection} />
      <Direction direction={direction}>
        {items.map((item, i) => (
          <Item {...item} key={i} />
        ))}
      </Direction>
    </Wrapper>
  );
};
export default App;
