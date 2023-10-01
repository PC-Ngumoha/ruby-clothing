import { useDispatch, useSelector } from 'react-redux';

// import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import { setDisplayed } from '../../store/cart/cart.actions';
import {
  selectCartDisplayed,
  selectCartCount
} from '../../store/cart/cart.selector';

import {
  CartIconContainer,
  ItemCount,
  ShoppingIcon
} from './cart-icon.style';

const CartIcon = () => {
  const dispatch = useDispatch();

  const displayed = useSelector(selectCartDisplayed);
  const cartCount = useSelector(selectCartCount);

  const toggleDropdownDisplay = () => dispatch(setDisplayed(!displayed));

  return (
    <CartIconContainer onClick={ toggleDropdownDisplay }>
      <ShoppingIcon/>
      <ItemCount>{ cartCount }</ItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;