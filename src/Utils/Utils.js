export const filterDataArr = (data, category, lowStockItem, sort) => {
  let arr = [...data];
  if (lowStockItem === false) {
    arr = arr.filter(({ stock }) => stock >= 10);
  }
  if (category) {
    if (category !== "all") {
      arr = arr.filter(({ department }) => department === category);
    }
  }
  if (sort) {
    if (sort === "name") {
      arr = arr.sort((a, b) => b.name > a.name);
    } else if (sort === "price") {
      arr = arr.sort((a, b) => b.price - a.price);
    } else if (sort === "stock") {
      arr = arr.sort((a, b) => b.stock - a.stock);
    }
  }
  return arr;
};
