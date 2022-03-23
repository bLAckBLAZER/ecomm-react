export const filterOutOfStock = (state, data) => {
  return state.includeOutOfStock
    ? data
    : data.filter((product) => product.inStock);
};
