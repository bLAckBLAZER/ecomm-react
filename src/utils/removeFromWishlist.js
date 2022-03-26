export const removeFromWishlist = (arr, item) => {
  return arr.filter((product) => product._id !== item._id);
};
