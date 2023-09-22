import { useContext } from 'react';

// import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import { CartContext } from '../../contexts/cart.context';

import {
  CartIconContainer,
  ItemCount,
  ShoppingIcon
} from './cart-icon.style';

const CartIcon = () => {

  const { displayed, setDisplayed, cartCount } = useContext(CartContext);

  const toggleDropdownDisplay = () => setDisplayed(!displayed);

  return (
    <CartIconContainer onClick={ toggleDropdownDisplay }>
      <ShoppingIcon/>
      <ItemCount>{ cartCount }</ItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;