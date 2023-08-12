import { Layout } from "../../Components/Layout/Layout";
import { useData } from "../../Context/dataContext";
import "./Products.css";

export const Products = () => {
  const {
    filters,
    dataState: { departments },
  } = useData();
  return (
    <Layout>
      <div>
        <h3>Products</h3>
        <select value={filters.category}>
          <option>all</option>
          {departments?.map((department) => (
            <option value={department}>{department}</option>
          ))}
        </select>
      </div>
    </Layout>
  );
};
