import React, { useState, useContext } from "react";
import { CartContainer, CartHeader } from "./styles";

import { contextState } from "../../Services/context";
import CartItem from "../CartItem";
const Cart = () => {
  const [isOpen, setOpen] = useState(false);

  const { state } = useContext(contextState);
  const { cart } = state;
  return (
    <CartContainer>
      <CartHeader onClick={() => setOpen(!isOpen)}>
        {isOpen ? (
          <h3>Your Items</h3>
        ) : (
          <img src="cart.png" width="30rem" alt="cart" />
        )}
      </CartHeader>
      {isOpen && (
        <>
          {cart.map((item) => (
            <CartItem {...item} />
          ))}
        </>
      )}
    </CartContainer>
  );
};

export default Cart;
