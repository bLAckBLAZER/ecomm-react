export const removeFromCartView = (arr, product) =>
  arr.filter((item) => item._id !== product._id);
