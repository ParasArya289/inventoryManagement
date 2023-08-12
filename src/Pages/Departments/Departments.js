import { useNavigate } from "react-router-dom";
import { Layout } from "../../Components/Layout/Layout";
import { useData } from "../../Context/dataContext";
import "./Departments.css";

export const GeneralCard = ({ title }) => {
  const { setFilters } = useData();

  const navigate = useNavigate();
  const navigateHandler = () => {
    navigate("/products");
    setFilters((prev) => ({ ...prev, category: title }));
  };
  return (
    <div tabIndex={1} className="generalCard" onClick={navigateHandler}>
      {title}
    </div>
  );
};

export const Departments = () => {
  const {
    dataState: { departments },
  } = useData();
  return (
    <Layout>
      <div className="department">
        <h3>Departments</h3>
        <div className="department__wraper">
          {departments?.map((department) => (
            <GeneralCard key={department} title={department} />
          ))}
        </div>
      </div>
    </Layout>
  );
};
