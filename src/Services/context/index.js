import React, { createContext, useReducer } from "react";
import { uuidv4 } from "../../utils";

const initialState = { items: [], cart: [] };
export const contextState = createContext(initialState);
const { Provider } = contextState;
export const StateProvider = ({ children }) => {
  const [state, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case "initializeInventory":
        const items = action.payload.map((item) => ({
          ...item,
          uuid: uuidv4(),
        }));

        return Object.assign({}, state, {
          items,
        });
      case "dumpInventory":
        return Object.assign({}, state, initialState);
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

  return <Provider value={{ ...state, dispatch }}>{children}</Provider>;
};
