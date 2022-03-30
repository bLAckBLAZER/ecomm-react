export const checkItemWishlist = (arr, product) => {
  if (arr.length === 0) {
    return false;
  }

  for (let item of arr) {
    if (item._id === product._id) {
      return true;
    }
  }

  return false;
};
