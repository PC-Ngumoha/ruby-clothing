import { useContext } from 'react';

import './checkout.style.scss'
import { CartContext } from '../../contexts/cart.context';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';

const Checkout = () => {
  const { cartItems, cartPrice } = useContext(CartContext);

  return (
    <div className='checkout-container'>
      <div className='checkout-header'>
        <div className='header-block'>
          <span>Product</span>
        </div>
        <div className='header-block'>
          <span>Description</span>
        </div>
        <div className='header-block'>
          <span>Quantity</span>
        </div>
        <div className='header-block'>
          <span>Price</span>
        </div>
        <div className='header-block'>
          <span>Remove</span>
        </div>
      </div>
      <div>
        {
          cartItems.map((item) => {
            return (
              <CheckoutItem key={ item.id } cartItem={ item } />
            );
          })
        }
      </div>
      <span className='total'>Total: &#8358;{ cartPrice }</span>
    </div>
  );
};

export default Checkout;
