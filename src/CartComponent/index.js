import React, { useState, useContext, useEffect } from "react";
import { CartContainer, CartHeader, Checkout } from "./styles";

import { cartState } from "../Services/cart";
import CartItem from "../CartItem";
const CartComponent = ({ checkout = () => {}, height }) => {
  const [isOpen, setOpen] = useState(false);

  const cartContext = useContext(cartState);
  const { cart } = cartContext;

  const scrollToBottom = (e, element) => {
    if (e.path.includes(element)) return;
    return element.scroll({ top: element.scrollHeight, behavior: "smooth" });
  };

  useEffect(() => {
    const element = document.getElementById("cart");

    window.addEventListener("click", (e) => scrollToBottom(e, element));
    return window.removeEventListener("click", (e) =>
      scrollToBottom(e, element)
    );
  });
  return (
    <CartContainer id="cart" height={height}>
      <CartHeader onClick={() => setOpen(!isOpen)}>
        {isOpen ? (
          <h3>Your Items</h3>
        ) : (
          <img
            src="https://firebasestorage.googleapis.com/v0/b/planup-d79a0.appspot.com/o/cart.png?alt=media&token=107d84aa-dfe5-452c-95ef-5072ba56c07f"
            width="30rem"
            alt="cart"
          />
        )}
      </CartHeader>
      {isOpen && (
        <React.Fragment>
          {cart.map((item, i) => (
            <CartItem key={i} {...item} />
          ))}
          <Checkout onClick={() => checkout(cart)}>Checkout</Checkout>
        </React.Fragment>
      )}
    </CartContainer>
  );
};

export default CartComponent;
