import { removeCategory } from "../utils/helperFunctions";

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
      if (state.selectedCategories.includes(payload)) {
        return {
          ...state,
          selectedCategories: removeCategory(state.selectedCategories, payload),
        };
      }

      return {
        ...state,
        selectedCategories: state.selectedCategories.concat([payload]),
      };

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
