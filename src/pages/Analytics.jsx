import "chart.js/auto";
import React from "react";
import { Bar, Line, Pie } from "react-chartjs-2";
import { TableData } from "../constants/tableData.constant";

const Reports = () => {
  const amounts = TableData.map((item) => item.amount);
  const names = TableData.map((item) => item.firstName);
  const statuses = TableData.map((item) => item.status);
  // const genders = TableData.map((item) => item.gender);

  const statusCount = {
    Pending: statuses.filter((status) => status === "Pending").length,
    Active: statuses.filter((status) => status === "Paid").length,
    Rejected: statuses.filter((status) => status === "Rejected").length,
  };

  // const genderCount = {
  //   Male: genders.filter((gender) => gender === "Male").length,
  //   Female: genders.filter((gender) => gender === "Female").length,
  // };

  const barData = {
    labels: names,
    datasets: [
      {
        label: "Amounts",
        data: amounts,
        backgroundColor: "rgba(75, 192, 192, 0.6)",
      },
    ],
  };

  const pieData = {
    labels: ["Pending", "Active", "Rejected"],
    datasets: [
      {
        data: [statusCount.Pending, statusCount.Active, statusCount.Rejected],
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
      },
    ],
  };

  const lineData = {
    labels: names,
    datasets: [
      {
        label: "Amounts over Names",
        data: amounts,
        fill: false,
        backgroundColor: "#742774",
        borderColor: "rgba(75, 192, 192, 1)",
      },
    ],
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-8">
        Data Visualizations
      </h1>
      <div className="grid grid-cols-2 gap-8 md:grid-cols-1">
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-center mb-4">
            Status Pie Chart
          </h2>
          <div className="w-[400px] h-[400px] mx-auto md:w-[300px] md:h-[300px]">
            <Pie data={pieData} />
          </div>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md col-span-1 md:col-span-2">
          <h2 className="text-2xl font-semibold text-center mb-4">
            Amounts Line Chart
          </h2>
          <Line data={lineData} />
        </div>

        <div className="bg-white p-4 rounded-lg shadow-md col-span-2">
          <h2 className="text-2xl font-semibold text-center mb-4">
            Amounts Bar Chart
          </h2>
          <Bar data={barData} />
        </div>
      </div>
    </div>
  );
};

export default Reports;
