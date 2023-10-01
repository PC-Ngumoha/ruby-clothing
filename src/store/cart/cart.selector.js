import { createSelector } from 'reselect';

const selectCartReducer = (state) => state.cart;

export const selectCartItems = createSelector(
  [selectCartReducer],
  (cart) => cart.cartItems
);

export const selectCartDisplayed = createSelector(
  [selectCartReducer],
  (cart) => cart.displayed
);

export const selectCartCount = createSelector(
  [selectCartItems],
  (items) => items.reduce(
    (count, item) => count + item.quantity,
    0
  )
);

export const selectCartTotal = createSelector(
  [selectCartItems],
  (items) => items.reduce(
    (total, item) => total + (item.quantity * item.price),
    0
  )
);
