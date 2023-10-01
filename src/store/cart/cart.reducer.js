import { CART_ACTIONS } from './cart.types';

const INITIAL_STATE = {
  displayed: false,
  cartItems: [],
};

export const cartReducer = (state = INITIAL_STATE, action = {}) => {
  const { type, payload } = action;

  switch ( type ) {
    case CART_ACTIONS.SET_CART_ITEMS:
      return {
        ...state,
        cartItems: payload
      };
    case CART_ACTIONS.TOGGLE_CART_DISPLAY:
      return {
        ...state,
        displayed: payload
      };
    default:
      return state; 
  }
};
