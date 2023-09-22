import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';

import {
  CheckoutItemContainer,
  ImageContainer,
  InfoField,
  QuantityField,
  RemoveButton
} from './checkout-item.style'

const CheckoutItem = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  const {
    deleteItemFromCart,
    addItemToCart,
    removeItemFromCart } = useContext(CartContext);

  const addItemHandler = () => addItemToCart(cartItem);
  const removeItemHandler = () => removeItemFromCart(cartItem);
  const deleteItemHandler = () => deleteItemFromCart(cartItem);

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
