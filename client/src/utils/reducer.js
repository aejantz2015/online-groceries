import { ADD_TO_CART } from "./actions";

export const reducer = (state, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };

    default:
      return state;
  }
};
