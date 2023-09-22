import {
  CartItemContainer,
  CartItemDetails,
  Detail
} from './cart-item.style';

const CartItem = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  return (
    <CartItemContainer>
      <img src={ imageUrl } alt={`${ name }`}/>
      <CartItemDetails>
        <Detail>{ name }</Detail>
        <span>
          { quantity } x &#8358;{ price }
        </span>
      </CartItemDetails>
    </CartItemContainer>
  );
};

export default CartItem;
