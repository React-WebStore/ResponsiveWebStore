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
    const { items, cart } = store;
    const itemToAdd = items.find((item) => item.uuid === key);
    let newCart = cart;

    if (cart.some((item) => item.uuid === key)) {
      newCart = cart.map((item) => {
        if (item.uuid === key) {
          item.quantity = item.quantity + 1;
        }
        return item;
      });
    } else {
      itemToAdd.quantity = 1;
      newCart.push(itemToAdd);
    }

    return store.dispatch({ type: "addToCart", payload: newCart });
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
