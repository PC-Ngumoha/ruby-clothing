import { useDispatch, useSelector } from 'react-redux';
import { selectCartItems } from '../../store/cart/cart.selector';
import {
  addItemToCart,
  removeItemFromCart,
  deleteItemFromCart
} from '../../store/cart/cart.actions';

import {
  CheckoutItemContainer,
  ImageContainer,
  InfoField,
  QuantityField,
  RemoveButton
} from './checkout-item.style'

const CheckoutItem = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);

  const addItemHandler = () => 
    dispatch(addItemToCart(cartItems, cartItem));
  const removeItemHandler = () => 
    dispatch(removeItemFromCart(cartItems, cartItem));
  const deleteItemHandler = () => 
    dispatch(deleteItemFromCart(cartItems, cartItem));

  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <img src={ imageUrl } alt={`${ name }`}/>
      </ImageContainer>
      <InfoField>{ name }</InfoField>
      <QuantityField>
        <div className='arrow' onClick={ removeItemHandler }>
          &#10094;
        </div>
        <span className='value'>{ quantity }</span>
        <div className='arrow' onClick={ addItemHandler }>
          &#10095;
        </div>
      </QuantityField>
      <InfoField>{ price }</InfoField>
      <RemoveButton
        onClick={
          deleteItemHandler
        }
      >
        &#10005;
      </RemoveButton>
    </CheckoutItemContainer>
  );
};

export default CheckoutItem;
