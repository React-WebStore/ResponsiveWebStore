import React, { useContext } from "react";
import { ItemContainer, Image, TextBox, AddToCart } from "./styles";

import { contextState } from "../Services/context";
import { cartState } from "../Services/cart";
const Item = ({
  uuid,
  img = "https://firebasestorage.googleapis.com/v0/b/planup-d79a0.appspot.com/o/2016-09-06-what-is-a-product.webp?alt=media&token=f6c25a81-8f09-4401-b274-029baff6b96a",
  title = "title",
  price = 10,
}) => {
  const cartContext = useContext(cartState);
  const store = useContext(contextState);

  const addToCart = (key) => {
    const { items } = store;
    const { cart } = cartContext;
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

    return cartContext.dispatch({ type: "addToCart", payload: newCart });
  };

  const openModal = (uuid) => {
    console.log("uuid", uuid);
    store.dispatch({ type: "addToModal", payload: uuid });
    store.dispatch({ type: "isOpen", payload: true });
  };

  return (
    <ItemContainer>
      <Image onClick={() => openModal(uuid)} src={img} />
      <TextBox>
        <h1>{title}</h1>
        <h3>${price}</h3>
        <AddToCart onClick={() => addToCart(uuid)} />
      </TextBox>
    </ItemContainer>
  );
};

export default Item;
