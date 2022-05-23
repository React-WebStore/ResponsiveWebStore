import React, { useState } from "react";
import { CartContainer, CartHeader } from "./styles";
import CartItem from "../CartItem";
const Cart = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <CartContainer>
      <CartHeader onClick={() => setOpen(!isOpen)}>
        {isOpen ? <h3>Your Items</h3> : <img src="cart.png" width="30rem" />}
      </CartHeader>
      {isOpen && (
        <>
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
        </>
      )}
    </CartContainer>
  );
};

export default Cart;
