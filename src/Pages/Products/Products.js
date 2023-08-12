import { Layout } from "../../Components/Layout/Layout";
import { useData } from "../../Context/dataContext";
import { filterDataArr } from "../../Utils/Utils";
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

export const Table = ({filterDataArr}) => {
  return (
    <table className="snack-table">
      <thead>
        <tr>
          <th>Image </th>

          <th>Name</th>

          <th>Description</th>

          <th>Price</th>

          <th name="calories">Stock</th>

          <th>Supplier</th>
        </tr>
      </thead>
      <tbody>
        {filterDataArr?.map((item, index) => (
          <tr key={index}>
            <td><img src={item.imageUrl} height="100"/></td>
            <td>{item.name}</td>
            <td>{item.description}</td>
            <td>{item.price}</td>
            <td>{item.stock}</td>
            <td>{item.supplier}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export const Products = () => {
  const {
    dataState: { inventoryData },
    filters,
  } = useData();
  const filtered = filterDataArr(inventoryData,filters.category,filters.lowStockItem,filters.sort);
  return (
    <Layout>
      <div>
        <h3>Products</h3>
        <FilterHeader />
        <Table filterDataArr={filtered}/>
      </div>
    </Layout>
  );
};
