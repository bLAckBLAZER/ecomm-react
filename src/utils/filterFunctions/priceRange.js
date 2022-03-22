export const filterPriceRange = (state, data) => {
  return data.filter((product) => product.price <= Number(state.maxRange));
};
