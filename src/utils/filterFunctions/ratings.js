export const filterRatings = (state, data) => {
  return data.filter((product) => product.rating >= state.selectedRating);
};
