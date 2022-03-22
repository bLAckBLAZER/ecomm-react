export const filterBrands = (state, data) => {
  if (state.selectedBrands.length === 0) {
    return data;
  }

  return data.filter((product) =>
    state.selectedBrands.includes(product.brand.toLowerCase())
  );
};
