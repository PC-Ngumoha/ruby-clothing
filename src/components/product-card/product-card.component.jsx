import { useDispatch, useSelector } from 'react-redux';

import Button, { BUTTON_CLASSES } from '../button/button.component';
import { addItemToCart } from '../../store/cart/cart.actions';
import { selectCartItems } from '../../store/cart/cart.selector';

import {
  ProductCardContainer,
  Footer,
  ProductName,
  Price,
  Image
} from './product-card.style';

const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product;
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);

  const addProductToCart = () => 
    dispatch(addItemToCart(cartItems, product));

  return (
    <ProductCardContainer className='container'>
      <Image src={ imageUrl } alt={ `An image of ${ name }` }/>
      <Footer>
        <ProductName>{ name }</ProductName>
        <Price>{ price }</Price>
      </Footer>
      <Button 
        buttonType={ BUTTON_CLASSES.inverted }
        onClick={ addProductToCart }
      > 
        Add to cart 
      </Button>
    </ProductCardContainer>
  );
};

export default ProductCard;
