import { useContext } from 'react';

import { CartContext } from '../../contexts/cart.context';
import Button from '../button/button.component';

import {
  ProductCardContainer,
  Footer,
  ProductName,
  Price,
  Image
} from './product-card.style';

const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product;
  const { addItemToCart } = useContext(CartContext);

  const addProductToCart = () => addItemToCart(product);

  return (
    <ProductCardContainer className='container'>
      <Image src={ imageUrl } alt={ `An image of ${ name }` }/>
      <Footer>
        <ProductName>{ name }</ProductName>
        <Price>{ price }</Price>
      </Footer>
      <Button 
        buttonType='inverted'
        onClick={ addProductToCart }
      > 
        Add to cart 
      </Button>
    </ProductCardContainer>
  );
};

export default ProductCard;
