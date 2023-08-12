import "./Dashboard.css";
import { Layout } from "../../Components/Layout/Layout";

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { useData } from "../../Context/dataContext";

ChartJS.register(ArcElement, Tooltip, Legend);

export const Dashboard = () => {
  const {
    dataState: { totalStocks, totalDelivered, lowStockItems },
  } = useData();

  const data = {
    labels: ["Total Stocks", "Total Delivered", "Low Stock Items"],
    datasets: [
      {
        label: "",
        data: [totalStocks, totalDelivered, lowStockItems],
        backgroundColor: [
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(255, 99, 132, 0.2)",
        ],
        borderColor: [
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(255, 99, 132, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <Layout>
      <div className="dashboard">
        <h3>Dashboard</h3>
        <div>
          <Doughnut data={data} />
        </div>
      </div>
    </Layout>
  );
};
