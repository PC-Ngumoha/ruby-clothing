import { createAction } from "../../utils/reducer/reducer.util";
import { CATEGORIES_ACTIONS } from "./categories.types";

export const setCategories = (categories) => createAction(
  CATEGORIES_ACTIONS.SET_CATEGORIES,
  categories
);
