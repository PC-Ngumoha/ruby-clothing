import { useSelector } from 'react-redux';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import { selectCartItems, selectCartTotal } from '../../store/cart/cart.selector';

import {
  CheckoutContainer,
  HeaderBlocks,
  HeaderBlock,
  CheckoutTotal
} from './checkout.style';

const Checkout = () => {
  const cartItems = useSelector(selectCartItems);
  const cartTotal = useSelector(selectCartTotal);

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
      <CheckoutTotal>Total: &#8358;{ cartTotal }</CheckoutTotal>
    </CheckoutContainer>
  );
};

export default Checkout;
