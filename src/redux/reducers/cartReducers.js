import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  CLEAR_CART,
} from "../actions/actionTypes";

let cartItems = [];

export const CartReducer = (state = cartItems, action) => {
  switch (action.type) {
    case ADD_TO_CART: {
      if (!state.find((item) => item.id === action.payload.id)) {
        return [...state, action.payload];
      }
      return [...state];
    }

    case REMOVE_FROM_CART:
      return state.filter((item) => item.id !== action.payload);

    case CLEAR_CART:
      return [];
    default:
      return state;
  }
};
