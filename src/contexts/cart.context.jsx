import { createContext, useState, useEffect } from 'react';


export const CartContext = createContext({
  displayed: false,
  setDisplayed: () => {},
  cartItems: [],
  addItemToCart: () => {},
  cartCount: 0
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

export const CartProvider = ({ children }) => {
  const [ displayed, setDisplayed ] = useState(false);
  const [ cartItems, setCartItems ] = useState([]);
  const [ cartCount, setCartCount ] = useState(0);

  // updates cart count with change in number of cart items.
  useEffect(() => {
    const newCartCount = cartItems.reduce(
      (count, item) => count + item.quantity,
      0
    );
    setCartCount(newCartCount);
  }, [ cartItems ]);

  const addItemToCart = (itemToAdd) => {
    setCartItems(addCartItem(cartItems, itemToAdd));
  };

  const contextValue = { 
    displayed,
    setDisplayed,
    cartItems,
    addItemToCart,
    cartCount
  };

  return (
    <CartContext.Provider value={ contextValue }>
      { children }
    </CartContext.Provider>
  );
};