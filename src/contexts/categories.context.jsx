import { createContext, useState, useEffect } from "react"
import { getCategoriesAndDocuments } from "../utils/firebase/firebase.util.js";

export const CategoriesContext = createContext({
  categoriesMap: {}
});

export const CategoriesProvider = ({ children }) => {
  const [ categoriesMap, setCategoriesMap ] = useState({});

  // Retrieves the documents from firestore
  useEffect(() => {
    const getCategoryMap = async () => {
      // return await getCategoriesAndDocuments();
      const categoryMap = await getCategoriesAndDocuments();
      // console.log(categoryMap);
      setCategoriesMap(categoryMap);
    };
    getCategoryMap();
  }, []);

  const contextValue = { categoriesMap };

  return (
    <CategoriesContext.Provider value={ contextValue }>
      { children }
    </CategoriesContext.Provider>
  );
}