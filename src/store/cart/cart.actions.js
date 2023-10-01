import { CART_ACTIONS } from './cart.types';
import { createAction } from '../../utils/reducer/reducer.util';

// Helper Function
const addCartItem = (cartItems, product) => {
  const foundItem = cartItems.find(
    (cartItem) => cartItem.id === product.id
  );

  if (foundItem) {
    return cartItems.map(
      (cartItem) => cartItem.id === product.id
      ? { ...cartItem, quantity: cartItem.quantity + 1 }
      : cartItem
    );
  }

  return [ ...cartItems, { ...product, quantity: 1 } ];
};

// Helper Function
const removeCartItem = (cartItems, product) => {
  const foundItem = cartItems.find(
    (cartItem) => cartItem.id === product.id
  );

  if (foundItem.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== product.id);
  }

  return cartItems.map(
      (cartItem) => cartItem.id === product.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
    );
};

// Helper Function
const deleteCartItem = (cartItems, product) => {
  return cartItems.filter(
    (cartItem) => cartItem.id !== product.id
  );
};



export const setDisplayed = (bool) => 
  createAction(
    CART_ACTIONS.TOGGLE_CART_DISPLAY,
    bool
  );

export const addItemToCart = (cartItems, productToAdd) => {
  const newCartItems = addCartItem(cartItems, productToAdd);
  return createAction(
    CART_ACTIONS.SET_CART_ITEMS,
    newCartItems
  );
};

export const removeItemFromCart = (cartItems, productToRemove) => {
  const newCartItems = removeCartItem(cartItems, productToRemove);
  return createAction(
    CART_ACTIONS.SET_CART_ITEMS,
    newCartItems
  );
};

export const deleteItemFromCart = (cartItems, productToDelete) => {
  const newCartItems = deleteCartItem(cartItems, productToDelete);
  return createAction(
    CART_ACTIONS.SET_CART_ITEMS,
    newCartItems
  );
};
