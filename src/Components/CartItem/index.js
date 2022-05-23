import React from "react";
import { CartItemContainer, CartText, CartImage } from "./styles";
const CartItem = ({
  title = "title",
  price = 10,
  img = "2016-09-06-what-is-a-product.webp",
}) => (
  <CartItemContainer>
    <CartImage src={img} />
    <CartText>
      <h1>{title}</h1>
      <h3>${price}</h3>
    </CartText>
  </CartItemContainer>
);

export default CartItem;
