export const filterOutOfStock = (state, data) => {
  if (state.selectedCategories.length === 0) {
    return data;
  }
  return state.includeOutOfStock
    ? data
    : data.filter((product) => product.inStock);
};
