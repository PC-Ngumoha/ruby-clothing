import { useContext } from 'react';

import './cart-icon.style.scss';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import { DropdownDisplayContext } from '../../contexts/cart-dropdown.context';


const CartIcon = ({ onClick }) => {

  const { displayed, setDisplayed } = useContext(DropdownDisplayContext);

  const toggleDropdownDisplay = () => setDisplayed(!displayed);

  return (
    <div className='cart-icon-container' onClick={ toggleDropdownDisplay }>
      <ShoppingIcon className='shopping-icon'/>
      <span className='item-count'>0</span>
    </div>
  );
};

export default CartIcon;