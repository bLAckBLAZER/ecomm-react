export const isCategorySelected = (categoryList, categoryToCheckID) => {
  for (let category of categoryList) {
    if (category._id === categoryToCheckID) {
      return true;
    }
  }
  return false;
};
