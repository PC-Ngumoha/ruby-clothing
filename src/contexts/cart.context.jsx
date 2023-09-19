import { createContext, useState, useEffect } from 'react';


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

export const CartProvider = ({ children }) => {
  const [ displayed, setDisplayed ] = useState(false);
  const [ cartItems, setCartItems ] = useState([]);
  const [ cartCount, setCartCount ] = useState(0);
  const [ cartPrice, setCartPrice ] = useState(0);

  // updates cart count with change in number of cart items.
  useEffect(() => {
    const newCartCount = cartItems.reduce(
      (count, item) => count + item.quantity,
      0
    );
    setCartCount(newCartCount);
  }, [ cartItems ]);

  // Calculates the total price of all goods bought
  useEffect(() => {
    // iterates through all the items in the cart
      // gets the product of current item's price and quantity
      // adds the current value to the running total
    const newCartPrice = cartItems.reduce(
      (total, currItem) => total + (currItem.quantity * currItem.price),
      0
    );
    // sets the cartPrice state
    setCartPrice(newCartPrice);
  }, [ cartItems ]);

  const addItemToCart = (productToAdd) => {
    setCartItems(addCartItem(cartItems, productToAdd));
  };

  const removeItemFromCart = (productToRemove) => {
    setCartItems(removeCartItem(cartItems, productToRemove));
  };

  const deleteItemFromCart = (productToDelete) => {
    setCartItems(deleteCartItem(cartItems, productToDelete));
  }

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