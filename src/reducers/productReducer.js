import { isCategorySelected } from "../utils/isCategorySelected";
import { removeCategory } from "../utils/removeCategory";

export const productReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case "PRICE_RANGE":
      return { ...state, maxRange: payload };
    case "RATING":
      return { ...state, selectedRating: payload };
    case "SORT_BY_PRICE":
      return { ...state, sortByPrice: payload };
    case "OUT_OF_STOCK":
      return { ...state, includeOutOfStock: !state.includeOutOfStock };
    case "CATEGORY_CHANGE":
      if (!isCategorySelected(state.selectedCategories, payload._id)) {
        return {
          ...state,
          selectedCategories: state.selectedCategories.concat(payload),
        };
      } else {
        const updatedCategories = removeCategory(
          state.selectedCategories,
          payload._id
        );

        return { ...state, selectedCategories: updatedCategories };
      }

    case "BRAND_CHANGE":
      const updatedBrands = [...state.selectedBrands];
      state.selectedBrands.includes(payload)
        ? updatedBrands.splice(updatedBrands.indexOf(payload), 1)
        : updatedBrands.push(payload);

      return { ...state, selectedBrands: updatedBrands };

    case "RESET":
      return payload;
    default:
      return state;
  }
};
