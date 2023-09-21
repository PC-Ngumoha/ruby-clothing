import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';

import {
  CheckoutContainer,
  HeaderBlocks,
  HeaderBlock,
  CheckoutTotal
} from './checkout.style';

const Checkout = () => {
  const { cartItems, cartPrice } = useContext(CartContext);

  return (
    <CheckoutContainer>
      <HeaderBlocks>
        <HeaderBlock>
          <span>product</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>description</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>quantity</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>price</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>remove</span>
        </HeaderBlock>
      </HeaderBlocks>
      <div>
        {
          cartItems.map((item) => {
            return (
              <CheckoutItem key={ item.id } cartItem={ item } />
            );
          })
        }
      </div>
      <CheckoutTotal>Total: &#8358;{ cartPrice }</CheckoutTotal>
    </CheckoutContainer>
  );
};

export default Checkout;
