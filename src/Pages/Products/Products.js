import { Layout } from "../../Components/Layout/Layout";
import { useData } from "../../Context/dataContext";
import "./Products.css";

export const Products = () => {
  const {filters} = useData();
  return (
    <Layout>
      <div>Products {filters.category}</div>
    </Layout>
  );
};
