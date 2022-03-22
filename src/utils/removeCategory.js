export const removeCategory = (categoryList, categoryToRemoveID) => {
  const updatedCategories = [];

  for (let category of categoryList) {
    if (category._id !== categoryToRemoveID) {
      updatedCategories.push(category);
    }
  }

  return updatedCategories;
};
