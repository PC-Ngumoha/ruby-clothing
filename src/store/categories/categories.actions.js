import { createAction } from "../../utils/reducer/reducer.util";
import { CATEGORIES_ACTIONS } from "./categories.types";

export const setCategoriesMap = (categoriesMap) => createAction(
  CATEGORIES_ACTIONS.SET_CATEGORIES_MAP,
  categoriesMap
);