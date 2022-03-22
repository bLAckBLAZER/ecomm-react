export const removeCategory = (categoryList, categoryToRemove) => {
  const updatedCategories = [...categoryList];

  updatedCategories.splice(updatedCategories.indexOf(categoryToRemove), 1);

  return updatedCategories;
};
