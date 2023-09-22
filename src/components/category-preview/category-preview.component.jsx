import { Link } from 'react-router-dom';
import ProductCard from '../product-card/product-card.component';

import {
  CategoryPreviewContainer,
  Title,
  Preview
} from './category-preview.style';


const CategoryPreview = ({ title, products }) => {
  return (
    <CategoryPreviewContainer>
      <h2>
        <Title to={ title } >{ title.toUpperCase() }</Title>
      </h2>
      <Preview>
        {
          // returns the first four products in the category
          products.slice(0, 4).map((product) => {
            return (
              <ProductCard key={ product.id } product={ product }/>
            );
          })
        }
      </Preview>
    </CategoryPreviewContainer>
  );
};

export default CategoryPreview;
