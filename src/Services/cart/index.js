import React, { createContext, useReducer } from "react";
import CartComponent from "../../CartComponent";

const retrieve = JSON.parse(localStorage.getItem("cart"));
const initialState = retrieve || { cart: [] };
export const cartState = createContext(initialState);
const { Provider } = cartState;
export const Cart = ({ children, checkout = () => {} }) => {
  const [state, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case "addToCart":
        return Object.assign({}, state, {
          cart: action.payload,
        });
      case "removeFromCart":
        return Object.assign({}, state, {
          cart: state.cart.filter((item) => item.uuid !== action.payload),
        });
      default:
        throw new Error();
    }
  }, initialState);

  localStorage.setItem("cart", JSON.stringify(state));

  return (
    <Provider value={{ ...state, dispatch }}>
      <CartComponent checkout={checkout} />
      {children}
    </Provider>
  );
};
