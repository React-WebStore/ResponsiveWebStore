import React, { createContext, useReducer } from "react";
import { uuidv4 } from "../../utils";

const initialState = { items: [], cart: [] };
export const contextState = createContext(initialState);
const { Provider } = contextState;
export const StateProvider = ({ children }) => {
  const [state, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case "initializeInventory":
        action.payload.forEach((item) => (item.uuid = uuidv4()));

        return Object.assign({}, state, {
          items: action.payload,
        });
      case "dumpInventory":
        return Object.assign({}, state, initialState);
      case "addToCart":
        return Object.assign({}, state, {
          cart: [...state.cart, action.payload],
        });
      case "removeFromCart":
        return Object.assign({}, state, {
          cart: state.cart.filter((item) => item !== action.payload),
        });
      default:
        throw new Error();
    }
  }, initialState);

  return <Provider value={{ state, dispatch }}>{children}</Provider>;
};
