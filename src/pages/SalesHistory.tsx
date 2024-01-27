/* eslint-disable @typescript-eslint/no-explicit-any */
import { useLoaderData } from "react-router-dom";
import { Bar } from "react-chartjs-2";
import "chart.js/auto";

function SalesHistory() {
  const salesData = useLoaderData();
  console.log(salesData.data);
  const generateChartData = (data: any[], label: string) => {
    return {
      labels: data?.map((entry) => `${label} ${entry._id}`),
      datasets: [
        {
          label: `${label} total Sales`,
          data: data?.map((entry) => entry.totalSales),
          backgroundColor: "'rgba(255, 99, 132, 0.5)'",
          borderColor: "rgba(75,192,192,1)",
          borderWidth: 1,
        },
      ],
    };
  };
  return (
    <div>
      <h2 className="text-center text-2xl font-bold my-4 py-2 bg-orange-200">
        Daily Sales
      </h2>
      <Bar data={generateChartData(salesData?.data.daily, "Date")} />
      <label className="-mt-5 text-gray-500">Date pre Month</label>
      <div className="divider divider-secondary"></div>
      <h2 className="text-center text-2xl font-bold my-4 py-2 bg-orange-200">
        Weekly Sales
      </h2>
      <Bar data={generateChartData(salesData?.data.weekly, "Week")} />
      <label className="-mt-5 text-gray-500">Week pre Year</label>
      <div className="divider divider-secondary"></div>

      <h2 className="text-center text-2xl font-bold my-4 py-2 bg-orange-200">
        Monthly Sales
      </h2>
      <Bar data={generateChartData(salesData?.data?.monthly, "Month")} />
      <label className="-mt-5 text-gray-500">Month pre Year</label>
      <div className="divider divider-secondary mt-0"></div>
      <h2 className="text-center text-2xl font-bold my-4 py-2 bg-orange-200">
        Yearly Sales
      </h2>
      <Bar data={generateChartData(salesData?.data.yearly, "Year")} />
    </div>
  );
}

export default SalesHistory;
