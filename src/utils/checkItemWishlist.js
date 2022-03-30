export const checkItemWishlist = (arr, product) => {
  if (arr.length === 0) {
    return false;
  }

  return arr.some((item) => item._id === product._id);
};
