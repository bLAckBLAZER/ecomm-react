export const decrementCartView = (arr, product) => {
  return arr.map((item) =>
    item._id === product._id
      ? { ...item, qtyOrdered: item.qtyOrdered - 1 }
      : item
  );
};

export const incrementCartView = (arr, product) => {
  return arr.map((item) =>
    item._id === product._id
      ? { ...item, qtyOrdered: item.qtyOrdered + 1 }
      : item
  );
};

export const isPresentInList = (itemId, list) => {
  if (list.length === 0) {
    return false;
  }

  return list.some((listItem) => listItem._id === itemId);
};

export const removeCategory = (categoryList, categoryToRemove) => {
  const updatedCategories = [...categoryList];

  updatedCategories.splice(updatedCategories.indexOf(categoryToRemove), 1);

  return updatedCategories;
};

export const removeFromCartView = (arr, product) =>
  arr.filter((item) => item._id !== product._id);

export const removeFromWishlist = (arr, item) => {
  return arr.filter((product) => product._id !== item._id);
};

export const scrollToTop = () => {
  window.scrollTo(0, 0);
};
