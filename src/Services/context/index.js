import React, { createContext, useReducer } from "react";
import { uuidv4 } from "./utils";
import ProductModal from "../../ProductModal";
const initialState = { items: [], cart: [], modal: {}, isOpen: false };
export const contextState = createContext(initialState);
const { Provider, Consumer } = contextState;
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
      case "addToModal": {
        return Object.assign({}, state, {
          modal: state.items.filter((item) => item.uuid === action.payload)[0],
        });
      }
      case "isOpen": {
        console.log("i Run");
        return Object.assign({}, state, {
          isOpen: action.payload,
        });
      }
      default:
        throw new Error();
    }
  }, initialState);

  return <Provider value={{ ...state, dispatch }}>{children}</Provider>;
};

export const Modal = () => (
  <Consumer>
    {({ isOpen, modal }) => {
      console.log("isOpen", isOpen);
      console.log("modal", modal);
      isOpen && <ProductModal modal={modal} />;
    }}
  </Consumer>
);
