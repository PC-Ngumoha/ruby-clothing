import { useContext, Fragment } from 'react';

import { CategoriesContext } from '../../contexts/categories.context';
import CategoryPreview from '../../components/category-preview/category-preview.component';

// import './categories-preview.style.scss';

const CategoriesPreview = () => {
  const { categoriesMap } = useContext(CategoriesContext);
  return (
   <Fragment>
    {
      // displays all the categories available
      Object.keys(categoriesMap).map((title) => (
        <CategoryPreview 
          key={ title }
          title={ title }
          products={ categoriesMap[title] }
        />
      ))
    }
   </Fragment>
  );
};

export default CategoriesPreview;
