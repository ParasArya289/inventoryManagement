import { useNavigate } from "react-router-dom";
import { Layout } from "../../Components/Layout/Layout";
import { useData } from "../../Context/dataContext";
import "./Departments.css";

export const GeneralCard = ({ title }) => {
  const navigate = useNavigate();
  return (
    <div
      tabIndex={1}
      className="generalCard"
      onClick={() => navigate("/product/" + title)}
    >
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
