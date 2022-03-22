export const sortByPrice = (state, data) => {
  const filteredData = [...data];

  if (state.sortByPrice === "LOW_TO_HIGH") {
    return filteredData.sort((a, b) => a.price - b.price);
  }

  return filteredData.sort((a, b) => b.price - a.price);
};
