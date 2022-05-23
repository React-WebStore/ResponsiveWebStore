import React from "react";
import { ItemContainer, Image, TextBox } from "./styles";

const Item = ({
  img = "2016-09-06-what-is-a-product.webp",
  title = "title",
  price = 10,
}) => (
  <ItemContainer>
    <Image src={img}></Image>
    <TextBox>
      <h1>{title}</h1>
      <h3>${price}</h3>
      <button>Add To Cart</button>
    </TextBox>
  </ItemContainer>
);

export default Item;
