import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import CategoriesPreview from '../../components/categories-preview/categories-preview.component';
import Category from '../category/category.component';
import { getCategoriesAndDocuments } from '../../utils/firebase/firebase.util';
import { setCategoriesMap } from '../../store/categories/categories.actions';

const Shop = () => {
  const dispatch = useDispatch();
  // Tries to get the categories from firebase
  // and set it's value to redux
  useEffect(() => {
    const getCategoryMap = async () => {
      const categoryMap = await getCategoriesAndDocuments();
      dispatch(setCategoriesMap(categoryMap));
    };
    getCategoryMap();
  }, []);

  return (
   <Routes>
    <Route index element={ <CategoriesPreview /> }/>
    <Route path=':category' element={ <Category /> }/>
   </Routes>
  );
};

export default Shop;
