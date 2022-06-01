import React, { useState, useContext, useEffect } from "react";
import { CartContainer, CartHeader } from "./styles";

import { contextState } from "../../Services/context";
import CartItem from "../CartItem";
const Cart = () => {
  const [isOpen, setOpen] = useState(false);

  const store = useContext(contextState);
  const { cart } = store;

  console.log(cart.length);

  const scrollToBottom = (e, element) => {
    if (e.path.includes(element)) return;
    return element.scroll({ top: element.scrollHeight, behavior: "smooth" });
  };

  useEffect(() => {
    const element = document.getElementsByClassName("sc-gKXOVf eGOJaV")[0];
    window.addEventListener("click", (e) => scrollToBottom(e, element));
    return window.removeEventListener("click", (e) =>
      scrollToBottom(e, element)
    );
  });
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
