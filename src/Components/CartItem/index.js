import React, { useContext } from "react";
import { contextState } from "../../Services/context";
import { CartItemContainer, CartText, CartImage, Remove } from "./styles";
const CartItem = ({
  title = "title",
  price = 10,
  quantity = 0,
  uuid,
  img = "2016-09-06-what-is-a-product.webp",
}) => {
  const store = useContext(contextState);

  const removeFromCart = (uuid) => {
    store.dispatch({ type: "removeFromCart", payload: uuid });
  };
  return (
    <CartItemContainer>
      <CartImage src={img} alt="item" />
      <Remove onClick={() => removeFromCart(uuid)} />
      <CartText>
        <h1>{title}</h1>
        <h3>${price}</h3>
        <h3>{quantity}</h3>
      </CartText>
    </CartItemContainer>
  );
};

export default CartItem;
