import { createContext, useReducer } from 'react';
import { createAction } from '../utils/reducer/reducer.util';


export const CartContext = createContext({
  displayed: false,
  setDisplayed: () => {},
  cartItems: [],
  addItemToCart: () => {},
  removeItemFromCart: () => {},
  deleteItemFromCart: () => {},
  cartCount: 0,
  cartPrice: 0
});

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

const deleteCartItem = (cartItems, product) => {
  return cartItems.filter(
    (cartItem) => cartItem.id !== product.id
  );
};

export const CART_ACTIONS = {
  SET_CART_ITEMS: 'SET_CART_ITEMS',
  TOGGLE_CART_DISPLAY: 'TOGGLE_CART_DISPLAY'
};

const cartReducer = (state, action) => {
  const { type, payload } = action;

  switch ( type ) {
    case CART_ACTIONS.SET_CART_ITEMS:
      return {
        ...state,
        ...payload
      };
    case CART_ACTIONS.TOGGLE_CART_DISPLAY:
      return {
        ...state,
        displayed: payload
      };
    default:
      throw new Error(`Unexpected action type: ${ type }`); 
  }
};

const INITIAL_STATE = {
  displayed: false,
  cartItems: [],
  cartCount: 0,
  cartPrice: 0
};

export const CartProvider = ({ children }) => {
  const [
    { displayed, cartItems, cartCount, cartPrice },
    dispatch 
  ] = useReducer(cartReducer, INITIAL_STATE);

  const updateCartItemsReducer = (newCartItems) => {
    const newCartCount = newCartItems.reduce(
      (count, item) => count + item.quantity,
      0
    );

    const newCartPrice = newCartItems.reduce(
      (total, item) => total + (item.quantity * item.price),
      0
    );

    dispatch(
      createAction(
        CART_ACTIONS.SET_CART_ITEMS,
        {
          cartItems: newCartItems,
          cartCount: newCartCount,
          cartPrice: newCartPrice
        }
      )
    )
  };

  const setDisplayed = (bool) => {
    dispatch(
      createAction(
        CART_ACTIONS.TOGGLE_CART_DISPLAY,
        bool
      )
    );
  }

  const addItemToCart = (productToAdd) => {
    const newCartItems = addCartItem(cartItems, productToAdd);
    updateCartItemsReducer(newCartItems);
  };

  const removeItemFromCart = (productToRemove) => {
    const newCartItems = removeCartItem(cartItems, productToRemove);
    updateCartItemsReducer(newCartItems);
  };

  const deleteItemFromCart = (productToDelete) => {
    const newCartItems = deleteCartItem(cartItems, productToDelete);
    updateCartItemsReducer(newCartItems);
  };

  const contextValue = { 
    displayed,
    setDisplayed,
    cartItems,
    addItemToCart,
    removeItemFromCart,
    deleteItemFromCart,
    cartCount,
    cartPrice
  };

  return (
    <CartContext.Provider value={ contextValue }>
      { children }
    </CartContext.Provider>
  );
};