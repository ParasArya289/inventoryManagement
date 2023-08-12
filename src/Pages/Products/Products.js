import { Layout } from "../../Components/Layout/Layout";
import { useData } from "../../Context/dataContext";
import "./Products.css";

export const FilterHeader = () => {
  const {
    filters,
    setFilters,
    dataState: { departments },
  } = useData();
  const filterChangeHandler = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      setFilters((prev) => ({
        ...prev,
        [name]: checked,
      }));
      return;
    }
    setFilters((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  return (
    <header className="filterheader">
      <select
        value={filters.category}
        name="category"
        onChange={filterChangeHandler}
      >
        <option value="all">all</option>
        {departments?.map((department) => (
          <option value={department}>{department}</option>
        ))}
      </select>

      <label>
        <input
          type="checkbox"
          checked={filters.lowStockItem}
          name="lowStockItem"
          onChange={filterChangeHandler}
        />
        Low Stock Items
      </label>

      <select value={filters.sort} name="sort" onChange={filterChangeHandler}>
        <option value="name">Name</option>
        <option value="price">Price</option>
        <option value="stock">Stock</option>
      </select>
    </header>
  );
};

export const Products = () => {
  return (
    <Layout>
      <div>
        <h3>Products</h3>
        <FilterHeader />
      </div>
    </Layout>
  );
};
