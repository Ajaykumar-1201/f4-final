import { ADD_TO_CART, REMOVE_FROM_CART, CLEAR_CART } from "./actionTypes";

export const addToCart = (payload) => {
  return {
    type: ADD_TO_CART,
    payload: payload,
  };
};

export const removeFromCart = (prodID) => {
  return {
    type: REMOVE_FROM_CART,
    payload: prodID,
  };
};

export const clearCart = () => {
  return {
    type: CLEAR_CART,
  };
};
