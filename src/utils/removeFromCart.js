export const removeFromCart = (arr, product) =>
  arr.filter((item) => item._id !== product._id);
