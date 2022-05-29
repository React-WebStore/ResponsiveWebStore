import React, { useContext } from "react";
import { ItemContainer, Image, TextBox } from "./styles";

import { contextState } from "../../Services/context";
const Item = ({
  uuid,
  img = "2016-09-06-what-is-a-product.webp",
  title = "title",
  price = 10,
}) => {
  const store = useContext(contextState);

  const addToCart = (key) => {
    const { items } = store.state;
    const itemToAdd = items.find((item) => item.uuid === key);

    store.dispatch({ type: "addToCart", payload: itemToAdd });
  };
  return (
    <ItemContainer>
      <Image src={img}></Image>
      <TextBox>
        <h1>{title}</h1>
        <h3>${price}</h3>
        <button onClick={() => addToCart(uuid)}>Add To Cart</button>
      </TextBox>
    </ItemContainer>
  );
};

export default Item;
