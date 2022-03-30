export const updateCart = (arr, product) => {
  return arr.map((item) =>
    item._id === product._id
      ? { ...item, qtyOrdered: item.qtyOrdered + 1 }
      : item
  );
};
