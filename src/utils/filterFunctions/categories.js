export const filterCategory = (state, data) => {
  if (state.selectedCategories.length === 0) {
    return data;
  }

  return data.filter((product) =>
    state.selectedCategories.includes(product.category.toLowerCase())
  );
};
