import { useContext } from 'react';

import './cart-icon.style.scss';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import { CartContext } from '../../contexts/cart.context';


const CartIcon = () => {

  const { displayed, setDisplayed, cartCount } = useContext(CartContext);

  const toggleDropdownDisplay = () => setDisplayed(!displayed);

  return (
    <div className='cart-icon-container' onClick={ toggleDropdownDisplay }>
      <ShoppingIcon className='shopping-icon'/>
      <span className='item-count'>{ cartCount }</span>
    </div>
  );
};

export default CartIcon;