import React, { useContext } from "react";
import { QuantityContainer, Button } from "./styles";
import { contextState } from "../../Services/context";
const Quantity = ({ quantity, uuid }) => {
  const store = useContext(contextState);
  const { cart, dispatch } = store;

  const operand = (minMax, uuid) => {
    const newCart = cart.map((item) => {
      if (item.uuid === uuid) {
        if (minMax === "min") {
          if (item.quantity < 1) return item;
          item.quantity -= 1;
        } else {
          item.quantity += 1;
        }
      }
      return item;
    });

    return dispatch({ type: "addToCart", payload: newCart });
  };
  return (
    <QuantityContainer>
      <Button onClick={() => operand("min", uuid)}>-</Button>
      <h3>{quantity}</h3>
      <Button onClick={() => operand("plus", uuid)}>+</Button>
    </QuantityContainer>
  );
};

export default Quantity;
