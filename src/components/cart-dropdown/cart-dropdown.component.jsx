import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Button from '../button/button.component';
import CartItem from '../cart-item/cart-item.component';
import { selectCartItems } from '../../store/cart/cart.selector';

import {
  CartDropdownContainer,
  CartItems,
  EmptyMessage
} from './cart-dropdown.style';

const CartDropdown = () => {
  const cartItems = useSelector(selectCartItems);
  const navigate = useNavigate();

  const goToCheckout = () => navigate('/checkout');

  return (
    <CartDropdownContainer>
      <CartItems>
        {
          cartItems.length ? 
          cartItems.map(
            (cartItem) => <CartItem key={cartItem.id} cartItem={cartItem}/>
          ) :
          (
            <EmptyMessage>Cart is Empty, Buy something</EmptyMessage>
          )
        }
      </CartItems>
      <Button onClick={ goToCheckout }>Go To Checkout</Button>
    </CartDropdownContainer>
  );
};

export default CartDropdown;